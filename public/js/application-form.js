(function registerApplicationPopup () {
    
    var applicationPopupContainer = document.getElementById("application-popup-container");
    var uploadApplicationFormButton = document.getElementById("upload-application-form-button");

    uploadApplicationFormButton.addEventListener('click', function (e) {
        var top = window.pageYOffset;
        applicationPopupContainer.style.display = "table";
        applicationPopupContainer.style.top = top.toString() + "px";

        // fillup the signup text
        //var signupText = document.getElementById("signup-title");
        //signupText.textContent = "Signup/Login"

        // disable scrolling
        var body = document.getElementsByTagName("body")[0];
        var bodyClass = body.className + " no-scroll";
        body.setAttribute('class', bodyClass);
    });

    var cancelButton = document.getElementById("cancel");
    cancelButton.addEventListener('click', function (e) {
        var body = document.getElementsByTagName("body")[0];
        var bodyClass = body.className.replace(" no-scroll", "");

        applicationPopupContainer.style.display = "none";
        body.setAttribute('class', bodyClass); 
    });
/*
    //binding signup button click event
    signup.addEventListener('click', function (e) {
        var top = window.pageYOffset;
        signupPopupContainer.style.display = "table";
        signupPopupContainer.style.top = top.toString() + "px";

        // fillup the signup text
        var signupText = document.getElementById("signup-title");
        signupText.textContent = "Signup/Login"

        // disable scrolling
        var body = document.getElementsByTagName("body")[0];
        var bodyClass = body.className + " no-scroll";
        body.setAttribute('class', bodyClass);
    });
    
    //binding login button click event
    login.addEventListener('click', function (e) {
        var top = window.pageYOffset;
        signupPopupContainer.style.display = "table";
        signupPopupContainer.style.top = top.toString() + "px";

        // fillup the signup text
        var signupText = document.getElementById("signup-title");
        signupText.textContent = "Signup/Login"

        // disable scrolling
        var body = document.getElementsByTagName("body")[0];
        var bodyClass = body.className + " no-scroll";
        body.setAttribute('class', bodyClass);
    });
*/
    //binding signup container click event
    /*applicationPopupContainer.addEventListener('click', function (e) {
        var body = document.getElementsByTagName("body")[0];
        var bodyClass = body.className.replace(" no-scroll", "");

        this.style.display = "none";
        body.setAttribute('class', bodyClass); 
    });

    var applicationPopup = document.getElementById("application-popup");
    applicationPopup.addEventListener('click', function (e) {
        e.stopPropagation();
    });*/
})();