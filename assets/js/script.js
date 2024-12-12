$(document).ready(function(){
    $(".orders-date").flatpickr({
        defaultDate:"today",
        dateFormat: "d-m-Y",
        onChange:(dt)=>{
            console.log(dt);
        }
    });
})