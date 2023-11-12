$(function () {
    'use strict';
    // Adjust Slider Height
    var windowHeight = $(window).height(),
        upperNavHeight = $(".upper-bar").innerHeight(),
        navHeight = $(".navbar").innerHeight()
    $(".slider, .carousel-item").height(windowHeight - (upperNavHeight + navHeight));


    // featured work shuffle

    $(".featured-work ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).data("class") === "all") {
            $(".shuffle-imgs .col-md").css("opacity", "1");
        }else {
            $(".shuffle-imgs .col-md").css("opacity", ".08");
            $($(this).data("class")).parent().css("opacity", "1");
        }
    })


});


