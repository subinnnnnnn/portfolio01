$(function(){
  //PC메뉴
    $("#gnb > ul > li").mouseenter(function(){
      $(".depth").stop().fadeIn();
      $(".depth_bg").stop().slideDown().css({"height":"450px"});
    });

    $("#gnb > ul > li").mouseleave(function(){
      $(".depth").stop().fadeOut();          
      $(".depth_bg").stop().slideUp()             
    }); 

  // 모바일메뉴
    $(".btn_hamburger").click(function(){
      $("#mobile_gnb").toggleClass("open");
      $(".bg_overlay").toggleClass("open");
      $(this).toggleClass("open");
      $("html, body").toggleClass("hidden");
    });   
    $(".bg_overlay").click(function(){
      $("#mobile_gnb").removeClass("open");
      $(".bg_overlay").removeClass("open");
      $(".btn_hamburger").removeClass("open");
      $("html, body").removeClass("hidden");
    });

  //모바일 아코디언메뉴
    $('#mobile_gnb > ul > li > a').click(function() {
      $(this).parent().siblings("#mobile_gnb .active").removeClass("active").children(".depth").slideUp();
      $(this).parent().toggleClass("active");
      $(this).next(".depth").slideToggle();
    });
   
  //메인배너
    const MainBnn = new Swiper('.visual', {
      loop:true,
      centeredSlides:true,
      effect:"fade",
      slidesPerView:0,
      spaceBetween:0,
      speed:1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction:false,
      },
      loop:true,
		/*
      on: {
        slideChangeTransitionStart() {
          document.querySelectorAll('.visual .swiper-slide img').forEach(img => {
            img.style.transform='scale(1)';
            img.style.opacity='0.6';
          });
        },
        slideChangeTransitionEnd() {
          const active = document.querySelector('.visual .swiper-slide-active img');
          if (active) {
            active.style.transform = 'scale(1.08)';
            active.style.opacity = '1';
          }
        }
      }*/
    });

  //조은맘 서비스안내
    let inforTab = 0;
    const infortabs = document.querySelectorAll('ul.btn_area li');
    const inforimages = document.querySelectorAll('.img_area img'); 
    const intervalTime = 4000;
    let slideInterval;
    function showImage(index) {
      inforimages.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
      });
      infortabs.forEach((tab, i) => {
        tab.classList.toggle('on', i === index);
      });
    }
    function nextImage() {
      inforTab = (inforTab + 1) % inforimages.length;
      showImage(inforTab);
    }
    function startSlide() {
      slideInterval = setInterval(nextImage, intervalTime);
    }
    function stopSlide() {
      clearInterval(slideInterval);
    }
    infortabs.forEach((tab, index) => {
      tab.addEventListener('mouseenter', () => {
        stopSlide();
        inforTab = index;
        showImage(inforTab);
        startSlide();
      });
    });
    showImage(inforTab);
    startSlide();

  //퀵배너 
  $(window).scroll(function(){
    if($(window).scrollTop()>=350){
      $("#quick_menu").fadeIn();
      $("#quick_menu").addClass("fix")
    } else {
      $("#quick_menu").fadeOut();
      $("#quick_menu").removeClass("fix")                
    }
  });    

  //산후관리사
    // $('.manager_inner ul li').hover(function(){
    //   var tab_id = $(this).attr('mann_tab');
    //     $('.manager_inner ul li').removeClass('on');
    //     $('.mann_cont').removeClass('on');
    //     $(this).addClass('on');
    //     $("#"+tab_id).addClass('on');
    // });

  //광고배너
    var Bann = new Swiper(".banner_inner", {
      effect:"fade",
      autoplay: {
        delay:3500,
        disableOnInteraction:false
      },
      loop:"true",
    });

  //이벤트배너
    var EventWrap = new Swiper(".event_wrap", {
      slidesPerView: 2,//초기값 모바일이 먼저
      spaceBetween: 20,
      loop: true,
      freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        breakpoints: {
          600: {
            slidesPerView:3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView:4,
            spaceBetween:40,
          },
          1200: {
            slidesPerView:4,
            spaceBetween:40,
          },
        },
    });

  //조은맘뉴스 탭
    $('.news_tab > ul > li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $('.news_tab > ul > li').removeClass('on');
      $('.tab_content').removeClass('on');
      $(this).addClass('on');
      $("#"+tab_id).addClass('on');
    });

  //협력사배너
    var PartBann = new Swiper(".partner_banner", {
    slidesPerView:2,
    spaceBetween: 20,
    freeMode:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    breakpoints: {
      600: {
        slidesPerView:3,
        spaceBetween:20,
      },
      1024: {
        slidesPerView:4,
        spaceBetween:25,
      },
      1200: {
        slidesPerView:5,
        spaceBetween:25,
      },
    },    
  });


});