document.body.addEventListener('touchstart',function(){});
$(document).ready(() => {
   $('#nav-toggle').click(() => {
     $(".nav-item").toggle(100);
     $(".nav-link").toggle(100);
   });
});