// vanilla js
window.addEventListener('DOMContentLoaded', function () {

    console.log(1)

})

// jquery
$(document).ready(function () {

    // 페이지모션

    $('a').click(function (e) {
        e.preventDefault();
        const a = $(this).attr('href');
        console.log(a);
        if (a == "javascript:void(0);") {
            return alert('준비중입니다.')
        } else if(a == "javascript:void(1);"){
            return;
        }else if ($(this).hasClass('no-motion')) {
            window.open($(this).attr('href'))
        } else {
            $('header .inner .menu #gnb').hide();
            $('#loading-page').addClass('on');
            $('body').addClass('hidden');
            $('body').removeClass('isReady');
            function off() {
                $('#loading-page').addClass('off');
            }
            function url() {
                window.location.href = `${a}`;
            }
            setTimeout(off, 1000);
            setTimeout(url, 2000);
        }
    })

    // Header Fixed
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $('header').addClass('fixed')
        } else if (scroll < 1) {
            $('header').removeClass('fixed')
        }
    });


    // Menu-Btn Click Event
    const menuBtn = $('.menu-btn');
    const header = $('header');
    menuBtn.click(function () {
        header.toggleClass('on');
        if (header.hasClass('on') == true) {
            $('#gnb').fadeIn(300);
        } else {
            $('#gnb').fadeOut(300);
        }
    });


    // Wrapper Padding-bottom
    $(window).on('resize load', function () {
        const footerHeight = $('footer').height();
        $('#wrapper').css('padding-bottom', footerHeight);
    })

    // Top-btn
    $('#top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    // Main Sec7 System Slide
    var swiper = new Swiper("#system-slide", {
        //effect: "fade",
        /* fadeEffect: {
            crossFade: false,
        }, */
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        on: {
            activeIndexChange: function () {
                const slide = $('#system-slide .swiper-slide')
                const slideCount = $('#system-slide .swiper-info .count');
                const slideTotalCount = $('#system-slide .swiper-info .total-count');
                const count = this.realIndex + 1;
                const totalCount = slide.last().index() - 1;
                slideCount.text('0' + count)
                slideTotalCount.text('0' + totalCount)
            }
        },
        observer: true,
        observeParents: true,
    });

    var textSwiper = new Swiper('#studio-text-slide', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        on: {
            activeIndexChange: function () {
                const slide2 = $('#studio-text-slide .swiper-slide')
                const slideCount2 = $('#studio-slide-info .count');
                const slideTotalCount2 = $('#studio-slide-info .total-count');
                const count2 = this.realIndex + 1;
                const totalCount2 = slide2.last().index() - 1;
                slideCount2.text('0' + count2)
                slideTotalCount2.text('0' + totalCount2)
            }
        },
        observer: true,
        observeParents: true,
    });

    var visualSwiper = new Swiper('#studio-visual-slide', {
        // effect: "fade",
        slidesPerView: 1,
        loop: true,
        // fadeEffect: {
        //     crossFade: true
        // },
        observer: true,
        observeParents: true,
    });

    textSwiper.controller.control = visualSwiper;
    visualSwiper.controller.control = textSwiper;

    var companySwiper = new Swiper("#company-slide", {
        slidesPerView: 3,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        on: {
            activeIndexChange: function () {
                const slide = $('#company-slide .swiper-slide')
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
    });

    var companySec06Swiper = new Swiper(".sec06-slide", {
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        on: {
            activeIndexChange: function () {
                const slide2 = $('.sec06-slide .swiper-slide')
                const slideCount2 = $('.sec06-slide .count');
                const count2 = this.realIndex + 1;
                slideCount2.text(count2)
            }
        },
        navigation: {
            nextEl: '.sec06 .swiper-button-next',
            prevEl: '.sec06 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
    });

})

// 페이지모션 2

window.addEventListener('load', function () {
    setTimeout(() => {
        document.body.classList.remove('hidden')
        document.body.classList.add('isReady');
    }, 500)
})