const element = document.getElementById('reserve');
const btn =  document.getElementById('reserve-click');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    element.scrollIntoView();
});

$(document).Ready(function(){
   
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass("fa-pause")) {
            $('#carouselslides').carousel('pause');
            $('#carouselButton').children('span').removeClass("fa-pause");
            $('#carouselButton').children('span').addClass("fa-play");
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#carouselslides').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');                    
        }
    });
});
   
