$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("header").addClass("darkHeader");
        } else {
            $("header").removeClass("darkHeader");
        }
    });
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:100,
        autoplaySpeed: 2000,
        arrows: false,
        infinite:true,
        dots: true,
        fade: true,
    });

    $(".toggle-btn").click(function () {
        $(".main").toggleClass('open-menu')
    });

    $('.menu ul li a').click(function () {
        $('.menu ul li a').removeClass("active");
        $(this).addClass("active");
    });

    $(".mob-opacity-box").click(function () {
        $(".main").removeClass("open-menu")
    });
});