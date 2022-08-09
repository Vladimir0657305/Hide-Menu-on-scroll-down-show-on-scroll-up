var zero = 0;
$(document).ready(function () {
    $(window).on('scroll', function () {
        $('.navbar').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    })
})

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.progress-container').addClass('black');
    }
    else {
        $('nav').removeClass('black');
        $('.progress-container').removeClass('black');
    }
})
$(document).ready(function () {
    $(".menu h4").click(function () {
        $("nav ul").toggleClass("active")
    })
})

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}