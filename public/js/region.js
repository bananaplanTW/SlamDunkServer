var bounds;
var infowindows = [];
function setIconOnMap (map) {
	var schoolCards = document.getElementsByClassName('school-card');
	var schoolName;
	var marker, lat, lng, latlng;
	bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < schoolCards.length; i ++ ){
		schoolName = schoolCards[i].querySelector("#school-name").innerHTML;
		lat = parseFloat(schoolCards[i].getAttribute('data-lat'));
		lng = parseFloat(schoolCards[i].getAttribute('data-lng'));
		putIconOnMap(map, lat, lng, schoolName, schoolCards[i]);
	}
	map.fitBounds(bounds);
};

function putIconOnMap(map, lat, lng, schoolName, schoolCard) {
	var latlng = new google.maps.LatLng(lat, lng);
	var marker = new google.maps.Marker({
				    position: latlng,
				    title:schoolName
				});
	bounds.extend(latlng);
	marker.setMap(map);

	var infowindow = new google.maps.InfoWindow({
	    content: schoolCard.innerHTML
	});
	infowindows.push(infowindow);
	var isOpen = false;

	google.maps.event.addListener(marker, 'click', function() {
	  for (var i = 0; i < infowindows.length; i ++) {
	  	infowindows[i].close();
	  }
	  if (!isOpen) {
	  	infowindow.open(map,marker);
	  }
	  isOpen = !isOpen;
	});
	

	schoolCard.addEventListener('mouseover', function () {
	  /*for (var i = 0; i < infowindows.length; i ++) {
	  	infowindows[i].close();
	  }
	  infowindow.open(map,marker);*/
	  setAnimationBounce(marker);
	});
	schoolCard.addEventListener('mouseout', function () {
	  //infowindow.close();
	  removeAnimation(marker);
	});
};

function setAnimationBounce (marker) {
	marker.setAnimation(google.maps.Animation.BOUNCE);
};

function removeAnimation (marker) {
	marker.setAnimation(null);
};

google.maps.event.addDomListener(window, 'load', function () {
	var mapOptions = {
	  center: new google.maps.LatLng(-34.397, 150.644),
	  zoom: 8,
	  maxZoom: 17,
	  disableDefaultUI: true,
	  zoomControl: true,
	  style: google.maps.ZoomControlStyle.SMALL,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
    initializeMap(mapOptions, setIconOnMap);
});