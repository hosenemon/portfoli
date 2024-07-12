$(document).ready(function() {
    //hash
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    //header fixed
    $(window).scroll(function() {
        let header = $('.header'),
        scroll = $(window).scrollTop();
        if(scroll >= 100) header.addClass('fixed');
        else header.removeClass('fixed');


        //gotop
        let goTop = $(this).scrollTop();
        if(goTop < 200) {
            $(".goTop").fadeOut();
        }else{
            $(".goTop").fadeIn();
        };
    });

    //gotop
    $('.goTop').click(function() {
        $('html, body').animate({scrollTop: 0})
    })
    //menu active
    $(".nav-item").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

})

new WOW().init();