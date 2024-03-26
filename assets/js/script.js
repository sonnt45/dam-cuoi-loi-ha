"use strict"; function flyingPages() { var a = new Set, b = new Set, c = document.createElement("link"), d = c.relList && c.relList.supports && c.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting" in IntersectionObserverEntry.prototype, e = navigator.connection && (navigator.connection.saveData || (navigator.connection.effectiveType || "").includes("2g")); if (!e && d) { var f = function (a) { return new Promise(function (b, c) { var d = document.createElement("link"); d.rel = "prefetch", d.href = a, d.onload = b, d.onerror = c, document.head.appendChild(d) }) }, g = function (a) { var b = setTimeout(function () { return p() }, 5e3); f(a).catch(function () { return p() }).finally(function () { return clearTimeout(b) }) }, h = function (c) { var d = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1]; if (!(b.has(c) || a.has(c))) { var e = window.location.origin; if (c.substring(0, e.length) === e && window.location.href !== c) { for (var f = 0; f < window.FPConfig.ignoreKeywords.length; f++)if (c.includes(window.FPConfig.ignoreKeywords[f])) return; d ? (g(c), b.add(c)) : a.add(c) } } }, i = new IntersectionObserver(function (a) { a.forEach(function (a) { if (a.isIntersecting) { var b = a.target.href; h(b, !window.FPConfig.maxRPS) } }) }), j = function () { return setInterval(function () { Array.from(a).slice(0, window.FPConfig.maxRPS).forEach(function (c) { g(c), b.add(c), a.delete(c) }) }, 1e3) }, k = null, l = function (a) { var c = a.target.closest("a"); c && c.href && !b.has(c.href) && (k = setTimeout(function () { h(c.href, !0) }, window.FPConfig.hoverDelay)) }, m = function (a) { var c = a.target.closest("a"); c && c.href && !b.has(c.href) && h(c.href, !0) }, n = function (a) { var c = a.target.closest("a"); c && c.href && !b.has(c.href) && clearTimeout(k) }, o = window.requestIdleCallback || function (a) { var b = Date.now(); return setTimeout(function () { a({ didTimeout: !1, timeRemaining: function c() { var a = Math.max; return a(0, 50 - (Date.now() - b)) } }) }, 1) }, p = function () { document.querySelectorAll("a").forEach(function (a) { return i.unobserve(a) }), a.clear(), document.removeEventListener("mouseover", l, !0), document.removeEventListener("mouseout", n, !0), document.removeEventListener("touchstart", m, !0) }; window.FPConfig = Object.assign({ delay: 0, ignoreKeywords: [], maxRPS: 3, hoverDelay: 50 }, window.FPConfig), j(), o(function () { return setTimeout(function () { return document.querySelectorAll("a").forEach(function (a) { return i.observe(a) }) }, 1e3 * window.FPConfig.delay) }); var q = { capture: !0, passive: !0 }; document.addEventListener("mouseover", l, q), document.addEventListener("mouseout", n, q), document.addEventListener("touchstart", m, q) } } flyingPages(); (function ($) {
    'use strict'; window.FPConfig = { delay: 0, ignoreKeywords: [], maxRPS: 3, hoverDelay: 50 }; $(window).on("load", function () { $('.spinner').fadeOut(); $('.preloader-area').delay(350).fadeOut('slow'); }); jQuery(document).ready(function ($) {
        $(window).on('scroll', function () { if ($(window).scrollTop() > 50) { $('.navbar-fixed-top').addClass('sticky'); } else { $('.navbar-fixed-top').removeClass('sticky'); } }); var wow = new WOW({ mobile: false }); wow.init(); $(".slider-active").owlCarousel({ items: 1, dots: true, autoplay: true, loop: true, mouseDrag: false, touchDrag: false, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1, nav: true, } } }); $('.wishes-owl').owlCarousel({ items: 1, loop: true, margin: 10, navigation: false, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 1, nav: true, loop: false } } })
        $('.wishes-owl1').owlCarousel({ items: 2, loop: true, margin: 10, navigation: false, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 2, nav: true, loop: false } } })
        $('.wishes-owl2').owlCarousel({ items: 2, loop: true, margin: 10, navigation: false, responsiveClass: true, responsive: { 0: { items: 1, nav: false }, 600: { items: 1, nav: false }, 1000: { items: 2, nav: true, loop: false } } })
        $("#testimonial-slider").owlCarousel({ items: 1, pagination: true, navigationText: ["", ""], slideSpeed: 1000, autoPlay: true, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } }); $('.owl-registry').owlCarousel({ loop: true, margin: 10, dots: false, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], autoplay: true, slideSpeed: 2000, responsiveClass: true, responsive: { 0: { items: 1, nav: true }, 500: { items: 2, nav: true }, 600: { items: 3, nav: true }, 1000: { items: 4, nav: true, loop: false } } }); $('.store-slider').slick({ infinite: true, autoplay: false, arrows: true, dots: false, slidesToShow: 4, slidesToScroll: 1, responsive: [{ breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, } }, { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, } }, { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, } }] }); $('.services-slider').slick({ infinite: true, autoplay: true, arrows: true, dots: false, slidesToShow: 3, slidesToScroll: 1, responsive: [{ breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, } }, { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, } }] }); $('.store-slider1').slick({ infinite: true, autoplay: false, arrows: true, dots: false, slidesToShow: 3, slidesToScroll: 1, responsive: [{ breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, } }, { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, } }, { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, } }] }); $('.slider-for').slick({ slidesToShow: 1, slidesToScroll: 1, autoplay: true, arrows: false, dots: false, fade: true, asNavFor: '.slider-nav' }); $('.slider-nav').slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: '.slider-for', dots: false, centerMode: true, focusOnSelect: true }); $(".navbar-nav").on('click', 'a', function (e) { var anchor = $(this); $('html, body').stop().animate({ scrollTop: $(anchor.attr('href')).offset().top - 5 }, 1000); e.preventDefault(); }); $(".navbar-nav").on('click', 'a', function () { $(".navbar-collapse").removeClass("in"); })
        $('.skillsection').bind('inview', function (event, visible, visiblePartX, visiblePartY) { if (visible) { $('.chart').easyPieChart({ easing: 'easeOut', delay: 3000, lineCap: "square", lineWidth: "10", barColor: '#fff', trackColor: 'transparent', scaleColor: false, lineWidth: 2, size: 110, animate: 2000, onStep: function (from, to, percent) { this.el.children[0].innerHTML = Math.round(percent); } }); $(this).unbind('inview'); } }); $('.progress .progress-bar').css("width", function () { return $(this).attr("aria-valuenow") + "%"; })
        $('.portfolio-inner').mixItUp(); $('.coundown_res').countdown('2018/01/02', function (event) { var $this = $(this); $this.find('#day').html(event.strftime('<span>%D</span>')); $this.find('#hour').html(event.strftime('<span>%H</span>')); $this.find('#month').html(event.strftime('<span>%M</span>')); $this.find('#second').html(event.strftime('<span>%S</span>')); }); $('.counter').counterUp(); try { $(".fun-facts_wrapper").appear(function () { $(".timer").countTo(); }); } catch (err) { console.log(err.message); }
        $(".video-play-btn").magnificPopup({ type: 'iframe', }); $('.project-hover').magnificPopup({ delegate: 'a', type: 'image' }); var magnifPopup = function () { $('.port-popup').magnificPopup({ delegate: 'a', type: 'image', removalDelay: 300, mainClass: 'mfp-with-zoom', gallery: { enabled: true }, zoom: { enabled: true, duration: 300, easing: 'ease-in-out', opener: function (openerElement) { return openerElement.is('img') ? openerElement : openerElement.find('img'); } } }); }; magnifPopup();
        function masonryGridSetting() {
            if ($('.masonry-gallery').length) {
                var $grid =  $('.masonry-gallery').masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-item',
                    percentPosition: true
                });
    
                $grid.imagesLoaded().progress( function() {
                    $grid.masonry('layout');
                });
            }
        }
    
        masonryGridSetting();
        
        // SLIDER
    var menu = [];
    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 6500,
            disableOnInteraction: true,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


        
        $(document).ready(function(){
        	setAutoHeightEventImage();
		    $('[data-toggle="popover"]').popover();   
		   
		});
        

        if ($("#wish-form").length) {
            $("#wish-form").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 5
                    },
                    content: {
                        required: true,
                        minlength: 10
                    },
                    email: {
                        required: false,
                        email: true
                    },
                },
    
                messages: {
                    name: {
                        required: 'Vui lòng nhập tên của bạn.',
                        minlength: 'Tên phải lớn hơn 5 ký tự.',
                    },
                    content: {
                        required: 'Vui lòng nhập lời chúc.',
                        minlength: 'Lời chúc phải lớn hơn 10 ký tự.',
                    },
                    email: {
                        email: 'Địa chỉ email không hợp lệ.'
                    }
                },
                
                errorPlacement: function(error, element) {
                    if (element.attr("name") == "content" ) {
                      error.insertAfter("#wish-form .vitualTextarea");
                    } else {
                      error.insertAfter(element);
                    }
                },
                submitHandler: function (form) {
                    $("#loader").css("display", "inline-block");
                    $.ajax({
                        type: "POST",
                        url: "/wish",
                        data: $(form).serialize(),
                        success: function (res) {
                            $( "#loader").hide();
                            if(!res.error){
                                $('.wish-box').scrollTop(0);
                                $('.wish-box').prepend('<div class="wish-box-item bg"><strong>'+$(form).find("input[name='name']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")+'</strong><p>'+$(form).find("textarea[name='content']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")+'</p></div>');
                                $( "#success").html(res.message).slideDown( "slow" );
                                setTimeout(function() {
                                $( "#success").slideUp( "slow" );
                                }, 5000);
                            }else{
                                $( "#error").html(res.message).slideDown( "slow" );
                                setTimeout(function() {
                                $( "#error").slideUp( "slow" );
                                }, 5000);
                            }
    
                            form.reset();
                        },
                        error: function() {
                            $( "#loader").hide();
                            $( "#error").slideDown( "slow" );
                            setTimeout(function() {
                            $( "#error").slideUp( "slow" );
                            }, 5000);
                        }
                    });
                    return false;
                }
    
            });
        }

        if ($("#donate-modal").length && $(".buttonDonate").length  && $(".donate-modal-close").length) {
            $(document).on('click','.buttonDonate',function(){
                $("#donate-modal").show();
            });
            $(document).on('click','.donate-modal-close',function(){
                $("#donate-modal").hide();
            });
            $(document).on('click','body',function(e){
                if(e.target.id == $("#donate-modal").attr('id')) { $("#donate-modal").hide(); }
            });
        }

        if ($("#clock").length) {

            function timeElapse(date){
        
                var current = Date();
        
                var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
        
                var days = Math.floor(seconds / (3600 * 24));
        
                if (days < 10) {
        
                    days = "0" + days;
        
                }
        
                seconds = seconds % (3600 * 24);
        
                var hours = Math.floor(seconds / 3600);
        
                if (hours < 10) {
        
                    hours = "0" + hours;
        
                }
        
                seconds = seconds % 3600;
        
                var minutes = Math.floor(seconds / 60);
        
                if (minutes < 10) {
        
                    minutes = "0" + minutes;
        
                }
        
                seconds = seconds % 60;
        
                if (seconds < 10) {
        
                    seconds = "0" + seconds;
        
                }
        
                var html = '<div class="box"><div><div class="time">' + days + '</div> <span>'+ $('#clock').data('text-day') +'</span> </div></div><div class="box"><div><div class="time">' + hours + '</div> <span>'+ $('#clock').data('text-hour') +'</span> </div></div><div class="box"><div><div class="time">' + minutes + '</div> <span>'+ $('#clock').data('text-minute') +'</span> </div></div><div class="box"><div><div class="time">' + seconds + '</div> <span>'+ $('#clock').data('text-second') +'</span> </div></div>';
        
                $('#clock').html(html);
        
            }
        
            var time = $('#clock').data('date');
        
            $('#clock').countdown(time.replace(/-/g,'/'), function(event) {
        
                if(event.type == 'stoped'){
        
                    var together = new Date($('#clock').data('date'));           
        
                    together.setHours(0);                           
        
                    together.setMinutes(0);             
        
                    together.setSeconds(0);                 
        
                    together.setMilliseconds(0);
        
                    setInterval(function() {
        
                        timeElapse(together);
        
                    }, 1000);
        
                }else{
        
                    var $this = $(this).html(event.strftime(''
        
                    + '<div class="box"><div><div class="time">%D</div> <span>'+ $('#clock').data('text-day') +'</span> </div></div>'
        
                    + '<div class="box"><div><div class="time">%H</div> <span>'+ $('#clock').data('text-hour') +'</span> </div></div>'
        
                    + '<div class="box"><div><div class="time">%M</div> <span>'+ $('#clock').data('text-minute') +'</span> </div></div>'
        
                    + '<div class="box"><div><div class="time">%S</div> <span>'+ $('#clock').data('text-second') +'</span> </div></div>'));
        
                }
        
            });
        
        }
        
        function sticky() {
        var sticky = document.querySelectorAll('.sticky');
        var offsetTop = 150;

        if (sticky) {
            var tickerScroll = false;
            window.addEventListener('scroll', function () {
                if (!tickerScroll) {
                    tickerScroll = true;
                    requestAnimationFrame(function () {
                        for (var _i11 = 0; _i11 < sticky.length; _i11++) {
                            var stickyRect = sticky[_i11].getBoundingClientRect();

                            var parentRect = sticky[_i11].parentNode.getBoundingClientRect();

                            if (parentRect.height > stickyRect.height + offsetTop) {
                                if (parentRect.top > offsetTop) {
                                    sticky[_i11].style.position = 'absolute';
                                    sticky[_i11].style.top = '0px';
                                    sticky[_i11].style.bottom = 'auto';
                                    // sticky[_i11].style.width = '100%';
                                } else if (parentRect.bottom < stickyRect.height + offsetTop) {
                                    sticky[_i11].style.position = 'absolute';
                                    sticky[_i11].style.top = 'auto';
                                    sticky[_i11].style.bottom = '0px';
                                    // sticky[_i11].style.width = '100%';
                                } else {
                                    sticky[_i11].style.position = 'fixed';
                                    sticky[_i11].style.top = offsetTop + 'px';
                                    sticky[_i11].style.bottom = 'auto';
                                    // sticky[_i11].style.width = parentRect.width + 'px';
                                }
                            } else {
                                sticky[_i11].style.width = '';
                                sticky[_i11].style.position = '';
                                sticky[_i11].style.top = '';
                                sticky[_i11].style.bottom = '';
                            }
                        }

                        tickerScroll = false;
                    });
                }
            })
        }
    }
    
    sticky()
    
    });
    function setAutoHeightEventImage() {
    	if ($(".wedding-event").length) {
    		if($(window).width() >= 992) {
    			const imageHeight = $('.wedding-event .banner-event .event-img').outerHeight();
    			$('.wedding-event .banner-event').parent().css('min-height', (imageHeight+70) + 'px');	
    		}else{
    			$('.wedding-event .banner-event').parent().css('min-height', 'inherit');	
    		}
    	}
    }

            /*------------------------------------------
    = MENU ACCESSBILITY
    -------------------------------------------*/
    $('.btn-menu-open').click(function() {
        $('ul.list-menu-icon').css('opacity','1');
        $('ul.list-menu-icon').css('pointer-events','');
        $('.btn-menu-close').show();
        $('.btn-menu-open').hide();
    })
    $('.btn-menu-close').click(function() {
        $('ul.list-menu-icon').css('opacity','0');
        $('ul.list-menu-icon').css('pointer-events','none');
        $('.btn-menu-open').show();
        $('.btn-menu-close').hide();
    })
    setTimeout(() => {
        $('.btn-menu-open').hide();
        $('.btn-menu-close').show();
        $('ul.list-menu-icon').css('opacity','1');
    }, 3000); 
    $( window ).on("load", function(){
		if($('.bii-logo').length > 0){
			$('#menu-access').css('bottom','278px');
			document.querySelector('style').textContent += "@media (max-width: 799px){#menu-access{bottom: 238px!important;}}"
		} 
	})
    function shakeTooltip(){
        var arrTooltip = $('ul.list-menu-icon').children();
        arrTooltip.each(function(index) {
            setTimeout(() => {
                if(document.querySelector('.btn-menu-close').style.display !== "none"){  
                    $(this).addClass('shake');
                    $(this).children().children().children('.tooltiptext').css('visibility','visible');
                    setTimeout(() => {
                        $(this).children().children().children('.tooltiptext').css('visibility','');
                        $(this).removeClass('shake');
                    }, 3000);
                } else{
                    return false;
                }
            }, index*5000); 
        });   
    }
    if($('#menu-access').length >0){
        setTimeout(() => {
            shakeTooltip();
            myInterval = setInterval(shakeTooltip, 20000);
        }, 3000);
    }
    $('.btn-menu-close').click(function(){
        $('tooltiptext').css('visibility','');
        clearInterval(myInterval);
    });

    // ALBUM GALLERIES
	$(document).on('click', '.btn-see-more-gallery', function(e){
		e.preventDefault();
		let indexNumber = $(this).data('index') || 0;
		$(this).lightGallery({
		thumbnail: true,
		dynamic: true,
		dynamicEl: photoGalleries,
		download: true,
		autoplay: true,
		preload: 2,
		appendSubHtmlTo: '.lg-item',
		index: parseInt(indexNumber)
		});
	});

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(window).on('resize', function () { var bodyheight = $(this).height(); 
    $("#mt_banner").height(bodyheight); setAutoHeightEventImage();}).resize();
})(jQuery);