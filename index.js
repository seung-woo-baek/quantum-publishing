$(document).ready(function($) {
  $(window).scroll(function(){
    if($(this).scrollTop() >= 10){
      $("header").addClass("scroll");
    }else {
      $("header").removeClass("scroll");
    }
  });

  $('.menu-burger-btn').click(() => {
    if($('header').hasClass('mobile-on')){
      document.body.style.overflowY = '';
      document.body.style.position = '';
      $('header').removeClass('mobile-on')
    } else {
      document.body.style.overflowY = 'hidden';
      document.body.style.position = 'fixed';
      $('header').addClass('mobile-on')
    }
  })

  $(".menu-list-item button, .header-logo button").click(e => {
    if($('header').hasClass('mobile-on')){
      document.body.style.overflowY = '';
      document.body.style.position = '';
      $('header').removeClass('mobile-on')
    }
    menuScroll(e.currentTarget.getAttribute('class'))
  });
});

$(function(){
	$(window).scroll(function(){
    if($(this).scrollTop() >= $(".page1-banner-inner").offset().top-600){
			$(".page1-banner-inner").addClass("on");
		}
    if($(this).scrollTop() >= $(".page1-card").offset().top-528){
			$(".page1-card").addClass("on");
		}
    if($(this).scrollTop() >= $(".page3-contents").offset().top-600){
			$(".page3-contents h3").addClass("on");
		}
    if($(this).scrollTop() >= $(".page4-contents").offset().top-600){
			$(".page4-contents .page4-logo, .page4-contents h4").addClass("on");
		}
  })
	
});

function menuScroll(page){
  $('html,body').animate({scrollTop:$(`.${page}-contents`).offset().top-100}, 500);
}