document.addEventListener('DOMContentLoaded', function () {
    var clipElement = document.querySelector('.bar');
    var dongElement = document.querySelector('.dong');
    var initialClipPath = 'inset(35% 20% 40% round 100px)';
    var dongopacity = 'opacity(0)';
    var outer = document.querySelector('.sec1');
    
    window.addEventListener('scroll', function () {
    
    
    var outerTop = outer.offsetTop;
    if (window.scrollY > outerTop - 300) {
        clipElement.style.clipPath = 'inset(0 round 0)';
        dongElement.style = 'opacity(1)';
    } 
    else {
        clipElement.style.clipPath = initialClipPath;
        dongElement.style = dongopacity;
    }
  
    });
    
  });


var swiper = new Swiper(".sec2_outer", {
    slidesPerView: 3.5,
    spaceBetween: 30,



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000,
        // disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    direction: 'horizontal',
    effect: 'slide'
});

var swiper = new Swiper(".mySwiper", {

    effect: "cards",
    // grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



$('.swiper-slide').on('mouseover',function () {
    swiper.autoplay.stop();
});
$('.swiper-slide').on('mouseout',function () {
    swiper.autoplay.start();
});

$('.s3_R_cho').click(function () {
    $('.swiper-pagination-bullet').eq($(this).index()).trigger('click')
})


$('.s3_R_cho > span').click(function() {
    $('.s3_R_cho > span').not(this).removeClass('null');
    if($(this).hasClass('null')) {
        $('.s3_R_cho > span').removeClass('null');
        $('.address').slideUp(500);
    }
    else {
        $('.address').slideUp(500);
        $(this).nextAll('.address').slideDown(500);
        $(this).addClass('null');
    }
})




