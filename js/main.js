/**
 * Created by user on 7/25/17.
 */
(function ($) {
    'use strict';

        /*========================
         Bootstrap menu fix
         =========================*/
        $(".navbar-toggle").click(function(){
            $(".header-section .navbar-default").css('background', '#000');
        });
        
        
        $(".navbar-nav li a").click(function(){
            $(".navbar-collapse").removeClass('in');
        });
    
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        /*========================
         fixing the navbar on top while scrolling
         =========================*/
        $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
          console.log($(window).scrollTop())
          if ($(window).scrollTop() > 10) {
            $('.header-section').addClass('fixed', 1000);
          }
          if ($(window).scrollTop() < 10) {
            $('.header-section').removeClass('fixed');
          }
        });

        /*========================
         initialize wow js
         =========================*/
        new WOW().init();

         /*========================
         progress Bar
         =========================*/
        $.each($('div.progress-bar'), function () {
            $(this).css('width', $(this).attr('data-transition')+'%');
        });

        /*========================
        mixitup
        =========================*/
        var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

        var mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });

        /*========================
        activating owl carousel for team
        =========================*/
        $(".owl-one").owlCarousel({
          items : 2,
          autoplay : true,
          loop: true,
          nav:true,
          navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          responsiveClass: true,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            768: {
              items: 2,
              margin: 20
            },
            1000: {
              items: 2,
              margin: 20
            }
          }

        });

        /*========================
        activating owl carousel for blog
        =========================*/
        $(".owl-two").owlCarousel({
          items : 3,
          autoplay : true,
          loop: true,
          nav:true,
          navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          responsiveClass: true,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            768: {
              items: 3,
              margin: 20
            },
            1000: {
              items: 3,
              margin: 20
            }
          }

        });

        /*========================
        initializing magnific pop up
        =========================*/
        $('.link-image').magnificPopup({
        gallery: {
          enabled: true
        },
          type: 'image'
          // other options
        });

        /*========================
        easing effect for the menu
        =========================*/
        $('.navbar-nav li a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = "48";
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    
        /*========================
        add bootstrap scrollspy
        =========================*/
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });

        /*========================
        color-box toggle 
        =========================*/
        $("#color-toggle").on("click", function(event){
            event.preventDefault();
            if ( $(this).hasClass("color_box_out") ) {
            $(".color-box").stop().animate({left:"-205px"}, 600);
            } else {
            $(".color-box").stop().animate({left:"0px"}, 600);
            }
            $(this).toggleClass("color_box_out");
            return false;
        });
        $(".red").on("click", function(){
            $("body").addClass("red-theme").removeClass("default-theme aqua-theme orange-theme yellow-theme blue-theme");
        });
        $(".green").on("click", function(){
            $("body").addClass("default-theme").removeClass("red-theme aqua-theme orange-theme yellow-theme blue-theme");
        });
        $(".blue").on("click", function(){
            $("body").addClass("blue-theme").removeClass("default-theme aqua-theme orange-theme yellow-theme red-theme");
        });
        $(".orange").on("click", function(){
            $("body").addClass("orange-theme").removeClass("default-theme aqua-theme yellow-theme red-theme blue-theme");
        });
        $(".yellow").on("click", function(){
            $("body").addClass("yellow-theme").removeClass("default-theme aqua-theme red-theme orange-theme blue-theme");
        });
        $(".aqua").on("click", function(){
            $("body").addClass("aqua-theme").removeClass("default-theme red-theme orange-theme blue-theme yellow-theme");
        });

}(jQuery));


