



// vanilla js
window.addEventListener('DOMContentLoaded', function () {

    // Footer family-site 
    const familySite = document.querySelector('.family-site');
    const familySiteBtn = document.querySelector('.family-site-btn');
    familySiteBtn.addEventListener('click', function () {
        familySite.classList.toggle('on');
        // alert('준비중입니다.')
    })

    /*
    // Footer Event Motion
    const scroll_f1 = function () {
        const bodyHeight = document.body.offsetHeight;
        const footer = document.querySelector('footer');
        const footerInfo = footer.getBoundingClientRect();
    }
    document.addEventListener("scroll", scroll_f1);
    */

    var companySwiper = new Swiper("#leisure-slide-wrap", {
        slidesPerView: 4.8,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4.8,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3.8,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.8,
                spaceBetween: 10,
            }
        },
    });

})

// jquery
$(document).ready(function () {

    // 페이지모션

    $('a').click(function (e) {
        e.preventDefault();
        const a = $(this).attr('href');
        console.log(a);
        if (a == "javascript: void(0);") {
            return alert('준비중입니다.');
        } else if(a == "javascript:void(1);"){
            return ;
        }else if ($(this).hasClass('no-motion')){
            window.open($(this).attr('href'))
        } else {
            $('header .inner .menu #gnb').hide();
            $('footer').hide();
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

    // People-list Slide
    $('#people-list').slick({
        infinite: false, 	//무한 반복 옵션	 
        slidesToShow: 2,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed: 1000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: false, 		// 옆으로 이동하는 화살표 표시 여부
        dots: false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: false,			// 자동 스크롤 사용 여부
        autoplaySpeed: 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false,		// 세로 방향 슬라이드 옵션
        draggable: true, 	//드래그 가능 여부 
        responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 1024, //화면 사이즈 10240px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:1
						} 
					},
				]
    });

    /*
    $(window).scroll(function () {
        let scroll = 0;
        const footer = $('footer');
        const footerY = footer.offset().top - window.innerHeight;
        const windowScrollTop = $(window).scrollTop();
        if (windowScrollTop > footerY) {
            const footerHeight = footer.height();
            if (scroll < footerHeight) {
                footer.height(windowScrollTop - footerY);
                $('#wrapper').css('padding-bottom', windowScrollTop - footerY)
                console.log(windowScrollTop - footerY, scroll)
                scroll++;
            }
        }
    })
    */
})

// 페이지모션 2

window.addEventListener('load', function () {
    setTimeout(() => { 
        document.body.classList.remove('hidden')
        document.body.classList.add('isReady');
     }, 500)
})

window.addEventListener('load', function () {
    setTimeout(() => { 
        document.querySelector('footer').style.opacity = 1;
     }, 1000)
})

