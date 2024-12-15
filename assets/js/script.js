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
})