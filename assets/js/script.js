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
    
    // order date
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
            separateDialCode: true 
        });
    };

    // event date control
    let now = new Date();
    $(".event_date").flatpickr({
        dateFormat: "d-m-Y",
        inline: true,
        minDate: "today",
        defaultDate: now,
        onChange: (selectedDates, dateStr) => {
            updatePreview();
        }
    });
    $(".event_time").flatpickr({
        inline: true,
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: false, 
        defaultDate: now,
        onChange: (selectedDates, dateStr) => {
            updatePreview();
        }
    });
    function updatePreview() {
        let dateVal = $(".event_date").val();
        let timeVal = $(".event_time").val();
    
        if (dateVal && timeVal) {
            let [day, month, year] = dateVal.split("-");
            let dateObj = new Date(`${year}-${month}-${day}T${timeVal}`);
    
            let options = { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true };
            let formattedDate = dateObj.toLocaleString("en-US", options).replace(",", "").replace(":", ".");
    
            $('[data-preview="event-date"]').text(formattedDate);
        }
    }
    updatePreview();
    

    // preview input / Summary
    $("[data-preview-target]").on("input",function(){
        const inputValue=$(this).val().trim();
        const previewTarget=$(this).attr("data-preview-target");
        $(`[data-preview="${previewTarget}"]`).text(inputValue);
    });
    /* ________________ end create order page ________________ */
})