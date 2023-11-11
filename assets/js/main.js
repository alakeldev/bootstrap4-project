$(function () {
    'use strict';
    // Adjust Slider Height
    var windowHeight = $(window).height(),
        upperNavHeight = $(".upper-bar").innerHeight(),
        navHeight = $(".navbar").innerHeight()
    $(".slider, .carousel-item").height(windowHeight - (upperNavHeight + navHeight));
});
