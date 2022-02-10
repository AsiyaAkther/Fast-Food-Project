$(document).ready(function(){
    //wow js code
    new WOW().init();

    //jQuery Counter
        $('.counter').counterUp({
            time : 3000
        });
        
        $('.quotes-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
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
    })

    //owl carousal slider code
    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplaySpeed:1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
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
    })
});