(function ($) {
    "use strict";

    var shabab_lad3m = {

        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },
        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fas fa-level-up-alt'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.menu-toggler, .close-menu', '.mobile-menu, .main-menu');  
            	
            $('.mobile-menu ul li.menu-has-children > a').on('click', function () {
                $('.mobile-menu ul li.menu-has-children .submenu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 
                if($(this).parent('li').children('.submenu').length) {
                    if(!$(this).parent('li').children('.submenu').is(":visible")) { 
                        $(this).parent('li').children('.submenu').slideToggle();
                    }
                    return false; 
                }
            });
        },
        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image]").each(function() {
                var $this = $(this);               
    
                if(  $this.attr("data-bg-color") !== undefined ){                        
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                    $this.css("background-size", $this.attr("data-bg-size") );
                    $this.css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.css("background-position", $this.attr("data-bg-position") );
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }
            });
        },

        owlCarousel: function () {
            var heroCarousel = $('.hero-slider');
            if(heroCarousel.length) {            
                heroCarousel.owlCarousel({
                    autoplay: 1,
                    items: 1,
                    loop: 1,
                    dots: 1,
                    autoplaySpeed: 1000,
                    rtl: true,
                });
            };
            var programs_activities = $('.events-carousel .owl-carousel');
            if(programs_activities.length) {            
                programs_activities.owlCarousel({
                    autoplay: !1,
                    items: 1,
                    loop: 1,
                    dots: !1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 2,
                    responsive: {
                        576: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        },
                        1360: {
                            items: 4,
                        },
                    }
                });
            };
            var todays_programs = $('.todays-events .owl-carousel');
            if(todays_programs.length) {            
                todays_programs.owlCarousel({
                    autoplay: !1,
                    items: 1,
                    loop: 1,
                    dots: !1,
                    nav: 1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    responsive: {
                        576: {
                            items: 2,
                        },
                    }
                });
            };
            var partner_slider = $('.partner-slider .owl-carousel');
            if(partner_slider.length) {            
                partner_slider.owlCarousel({
                    autoplay: !1,
                    items: 2,
                    loop: 1,
                    dots: !1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 60,
                    responsive: {
                        375: {
                            items: 3,
                            margin: 40,
                        },
                        576: {
                            items: 4,
                            margin: 40,
                        },
                        768: {
                            items: 5,
                            margin: 50,
                        },
                        1200: {
                            items: 6,
                            margin: 60,
                        },
                    }
                });
            };
            var blog_slider = $('.blog.owl-carousel');
            if(blog_slider.length) {            
                blog_slider.owlCarousel({
                    autoplay: 1,
                    items: 1,
                    loop: 1,
                    dots: !1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 20,
                    responsive: {
                        576: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        },
                    }
                });
            };
            var blog_slider = $('.photos.owl-carousel, .videos.owl-carousel');
            if(blog_slider.length) {            
                blog_slider.owlCarousel({
                    autoplay: 1,
                    items: 2,
                    loop: 1,
                    dots: !1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 10,
                    responsive: {
                        768: {
                            items: 3,
                        },
                        1200: {
                            items: 4,
                        },
                    }
                });
            };
            var blog_slider = $('.live-broadcust.owl-carousel');
            if(blog_slider.length) {            
                blog_slider.owlCarousel({
                    autoplay: 1,
                    items: 2,
                    loop: 1,
                    dots: !1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 10,
                    responsive: {
                        768: {
                            items: 3,
                        },
                        1200: {
                            items: 4,
                        },
                    }
                });
            };
        },
        magnific_popup: function () {
            $('.popup').magnificPopup({
                delegate: '.zoom', // the selector for gallery item
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-fade',
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title');
                    }
               }
            });
            $('.popup-youtube').each(function() { 
                // the containers for all your galleries
                $(this).magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            });   
        },
        datePicker: function () {
            $( "#pick_date" ).datepicker({
                // isRTL:true,
                // changeMonth: true,
                // changeYear: true
            });
            $('.dropdown-menu .hasDatepicker').on('click', function(event){
                event.stopPropagation();
            });
        },
        
        initializ: function() {
            shabab_lad3m.scroll_to_top();
			shabab_lad3m.mobile_menu();
			shabab_lad3m.background_image();
			shabab_lad3m.owlCarousel();
			shabab_lad3m.magnific_popup();
			shabab_lad3m.datePicker();
		}
    };
    $(function() {
		shabab_lad3m.initializ();
	});

})(jQuery);