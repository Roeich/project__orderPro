$(document).ready(function(){
    /* ________________ start dashboard page ________________ */
    $(".orders-date").flatpickr({
        defaultDate:"today",
        dateFormat: "d-m-Y",
        onChange:(dt)=>{
            console.log(dt);
        }
    });
    /* ________________ end dashboard page ________________ */
    
    /* ________________ start track order page ________________ */
    $(".orders-date2").flatpickr({
        dateFormat: "d-m-Y",
        onChange:(dt)=>{
            console.log(dt);
        }
    });
    // select2 initialize
    $('.select2:not(.select2_searchable)').select2({
        minimumResultsForSearch: -1
    });
    $('.select2.select2_searchable').select2();
    /* ________________ end track order page ________________ */
    
    /* ________________ start create order page ________________ */
    // phone number input
    if($("#phone_number").length>0){
        const iti = window.intlTelInput($("#phone_number")[0],{
            initialCountry: "us", 
            utilsScript: "/assets/js/utils.js",
            strictMode: true,
            separateDialCode: true // Display dial code separately
        });
    };

    // preview input
    $("[data-preview-target]").on("input",function(){
        const inputValue=$(this).val().trim();
        const previewTarget=$(this).attr("data-preview-target");
        console.log(inputValue);
        $(`[data-preview="${previewTarget}"]`).text(inputValue);

    })
    /* ________________ end create order page ________________ */
})