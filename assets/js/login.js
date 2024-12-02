$(document).ready(function(){
    
    /* ______________________ start login page ______________________ */
    // phone number input
    const iti = window.intlTelInput($("#phone_number")[0],{
        initialCountry: "us", 
        utilsScript: "/assets/js/utils.js",
        strictMode: true,
        separateDialCode: true // Display dial code separately
    });
    $("#phoneForm").on("submit", function (e) {
        e.preventDefault();
        const fullPhoneNumber = iti.getNumber();
        if (!iti.isValidNumber()) {
            $("#phone_number").addClass("is-invalid");
            return;
        }
        
        // console.log("Phone Number:", fullPhoneNumber);
        $("#phone_number").removeClass("is-invalid");
        $("#phoneForm")[0].submit();
    });
    /* ______________________ end login page ______________________ */

    /* ______________________ start otp page ______________________ */

    /* ______________________ end otp page ______________________ */
})