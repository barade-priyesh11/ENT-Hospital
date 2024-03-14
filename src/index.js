$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});

$(document).ready(function(){
    $('.progress-title > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 1500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


 // Add Animate.css classes to the carousel items on hover
 $('.carousel-item').hover(
    function () {
      $(this).addClass('pulse'); // Change 'pulse' to the desired animation class
    },
    function () {
      $(this).removeClass('pulse');
    }
  );




  
//   cards slider javascript













