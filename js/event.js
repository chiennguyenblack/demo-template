$(document).ready (function () {
    myFunction();

});
var myVar;
function myFunction() {
  myVar = setTimeout(showPage,5000);
}

function showPage() {
    $('.loader-wrapper').css('display', 'none');
  }

$(window).on('scroll', function () {

    // Navbar change color
    st = $(this).scrollTop();
    if (st < 10) {
        $('#navbar').removeClass('navbar-custom-light');
        $('.logo-light').css('display', 'block');
        $('.logo-dark').css('display', 'none');
        $('.navbar-nav li a').css('color', 'white');
        $('.navbar-nav li.active a').css('color', '#0ebdca');
        $('.sign_btn').css('background-color', 'rgba(255, 255, 255, 0.12)');
        $('.sign_btn').css('color', 'white');
        $('.log_btn').css('color', 'white');
        $('.back_top').css('display', 'none');

    }
    else {
        $('#navbar').addClass('navbar-custom-light');
        $('.logo-light').css('display', 'none');
        $('.logo-dark').css('display', 'block');
        $('.navbar-nav li a').css('color', 'rgba(0, 0, 0, 0.7)');
        $('.navbar-nav li.active a').css('color', '#0ebdca');
        $('.sign_btn').css('color', '#0ebdca');
        $('.sign_btn').css('background-color', 'rgba(14, 189, 202, 0.12)');
        $('.log_btn').css('color', 'rgba(0, 0, 0, 0.7)');
        $('.back_top').css('display', 'block');
    }

    //Count upmm
    var posCount = $('#sof_count1').offset().top;
    if (st >= posCount) {
        animateValue('sof_count');
    };

});

function animateValue(id) {
    var obj = document.getElementById(id);
    var current = parseInt(obj.innerHTML);
    var handler = setInterval(function () {
        current = current + 333;
        if (current > 195468) {
            current = 195468;
            clearInterval(handler);
        }
        obj.innerHTML = current;
    }, 1);
}
$(document).ready(function () {
    //Owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideBy: 1,
        margin: 10,
        dots: true,
        dotEach: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});



