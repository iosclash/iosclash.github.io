$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:false,
    margin:0,
    autoplay:false,
    autoplayTimeout:3000,
    nav:false,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });



    
});