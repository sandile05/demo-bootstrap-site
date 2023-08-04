$(function(){
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll >=50){
            $('.hamburger').addClass('scrolled');
            $('nav').addClass('stickyadd');
            $('nav').removeClass('stick')
        }
        else{
            $('.hamburger').removeClass('scrolled');
            $('nav').removeClass('stickyadd');
            $('nav').addClass('stick');
        }
    })
});
