$(document).ready(function() {
    'use strict';
    $(function() {
        // Enables popover
        $("[data-toggle=popover]").popover();
    });

    function AddtoCart() {
        $(".btn-addto-cart").on('click', function() {
            $(".header-cart").addClass('active');
        });
    }
    AddtoCart();
    /*-----------------------------------------
     Home Category
    -----------------------------------------*/
    new Swiper('.home_category', {
        loop: false,
        slidesPerView: 9,
        spaceBetween: 15,
        touchRatio: 0,
        breakpoints: {
            1920: {
                slidesPerView: 9,
                spaceBetween: 10,
                touchRatio: 0,
            },
            1028: {
                slidesPerView: "auto",
                freeMode: true,
                spaceBetween: 10,
                touchRatio: 1,
            },
            480: {
                slidesPerView: "auto",
                freeMode: true,
                spaceBetween: 10,
                touchRatio: 1,
            }
        }
    });
    /*-----------------------------------------
     Video Slider
    -----------------------------------------*/
    new Swiper('.video-slider', {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 15,
        freeMode: true,
        touchRatio: 1,
    });

    /*-----------------------------------------
     Preloader Loading 
     -----------------------------------------*/
    function pre_loader() {
        $("#load").fadeOut();
        $('#pre-loader').delay(500).fadeOut(500);
    }
    pre_loader();

    function dismiss() {
        $(".product-notification .close").on('click', function() {
            $(".product-notification").hide().fadeOut('slow');
        });
    }
    dismiss();

    /*-----------------------------------------
     Promotional Bar Header 
     -----------------------------------------*/
    function promotional_bar() {
        $(".closeHeader").on('click', function() {
            $(".promotion-header").slideUp();
            Cookies.set('promotion', 'true', { expires: 1 });
            return false;
        });
    }
    promotional_bar();
    /*-----------------------------------------
        Setting Box dropdown
        -----------------------------------------*/
    function setting_box() {
        $(".setting-link").on("click", function() {
            $("#settingsBox").toggleClass("active");
        });
        $("body").on("click", function(e) {
            var t = $(e.target);
            t.parents().is("#settingsBox") || t.parents().is(".setting-link") || t.is(".setting-link") || $("#settingsBox").removeClass("active");
        });
    }
    setting_box();
    /*-----------------------------------------
     Header Search Drawer
     -----------------------------------------*/
    $('.modalOverly, .closeSearch').on('click', function() {
        $('#search-popup').removeClass("active");
        $('body').removeClass("showOverly searchact");
    });

    $('.header-main .site-search').on('click', function(e) {
        e.preventDefault();
        $('body').addClass("showOverly searchact");
        $('#search-popup').addClass("active");
        //$('.header-main').addClass("searchact");
        $('.user-links,#set_box,#cart-drawer').removeClass("active");
        setTimeout(function() {
            $('input[name=q]').focus();
        }, 600);
    });


    /* User Links dropdown */
    function user_links() {
        $(".user-link").on("click", function() {
            $("#userLinks").toggleClass("active");
        });
        $("body").on("click", function(e) {
            var t = $(e.target);
            t.parents().is("#userLinks") || t.parents().is(".user-link") || t.is(".user-link") || $("#userLinks").removeClass("active");
        });
    }
    user_links();

    /*-----------------------------------------
     Masonry Collection Banners
     -----------------------------------------*/
    var $grid = $('.banner-grid, .collection-page-grid, .category-page-grid, .lookbook, .custom-text-masonry-items').masonry({
        itemSelector: '.banner-item, .collection-page-item, .category-grid-item, .grid-lookbook, .custom-text-masonry-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.masonry();
    });

    $(".btn-shop").on("click", function() {
        $(".products .grid-lb, .grid-lookbook").removeClass("active"),
            $(this).next().addClass("active"), $(this).parents(".grid-lookbook").addClass("active");
    });
    $(".btn-shop-close").on("click", function() {
        $(this).parent().removeClass("active");
    });

    /*-----------------------------------------
     Mobile Main Menu
     -----------------------------------------*/
    var selectors = {
        body: 'body',
        sitenav: '#siteNav',
        navLinks: '#siteNav .lvl1 > a',
        menuToggle: '.js-mobile-nav-toggle',
        mobilenav: '.mobile-nav-wrapper',
        menuLinks: '#MobileNav .an',
        closemenu: '.closemobileMenu'
    };

    $(selectors.navLinks).each(function() {
        if ($(this).attr('href') == window.location.pathname)
            $(this).addClass('active');
    });

    $(selectors.menuToggle).on("click", function() {
        body: 'body',
        $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

    $(selectors.closemenu).on("click", function() {
        body: 'body',
        $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

    $("body").on('click', function(event) {
        var $target = $(event.target);
        if (!$target.parents().is(selectors.mobilenav) && !$target.parents().is(selectors.menuToggle) && !$target.is(selectors.menuToggle)) {
            $(selectors.mobilenav).removeClass("active");
            $(selectors.body).removeClass("menuOn");
            $(selectors.menuToggle).removeClass('mobile-nav--close').addClass('mobile-nav--open');
        }
    });

    $(selectors.menuLinks).on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('an-plus-l an-minus-l');
        $(this).parent().next().slideToggle();
    });

    /*--------------------------------------
     Promotion / Notification Cookie Bar 
     -------------------------------------- */
    function cookie_promo() {
        if ($.cookie('promotion') != 'true') {
            $(".notification-bar").show();
        }
        $(".close-announcement").on('click', function() {
            $(".notification-bar").slideUp();
            $.cookie('promotion', 'true', { expires: 1 });
        });
    }
    cookie_promo();

    /*-----------------------------------------
     Slick Slider
     -----------------------------------------*/
    /*  Homepage Slideshow */
    function home_slider() {
        $('.home-slideshow').not('.slick-initialized').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 8000,
            lazyLoad: 'ondemand'
        });
    }
    home_slider();


    // Full Size Banner on the Any Screen
    $(window).resize(function() {
        var bodyheight = $(this).height() - 35;
        $(".sliderFull .bg-size").height(bodyheight);
    }).resize();




    /* Products Slider */
    function product_slider() {
        $('.productSlider').not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    }
    product_slider();


    /* Latest Blog Slider */
    function blogpost_slider() {
        $('.blog-post-slider').not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    blogpost_slider();




    /* Testimonial Slider */
    function testimonial_slider() {
        $('.quotes-slider').not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    testimonial_slider();




    /*-----------------------------------
     Sidebar Categories Level links
     -------------------------------------*/
    function categories_level() {
        $(".sidebar_categories .sub-level a").on("click", function() {
            $(this).toggleClass('active');
            $(this).next(".sublinks").slideToggle("slow");
        });
    }
    categories_level();

    $(".filter-widget .widget-title").on("click", function() {
        $(this).next().toggleClass('hide');
        $(this).toggleClass("active");
    });

    $(".stitch-btn").on("click", function() {
        $(this).parent().find('.hide-info').addClass('show');
    });
    $(".stitch-close").on("click", function() {
        $('.hide-info').removeClass('show');
    });

    /*-----------------------------------
     Price Range Slider
     -------------------------------------*/
    function price_slider() {
        $("#slider-range").slider({
            range: true,
            min: 12,
            max: 200,
            values: [0, 100],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }
    price_slider();

    /*-----------------------------------
     Footer links for mobiles
     -------------------------------------*/
    function footer_dropdown() {
        $(".footer-links .h4").on('click', function() {
            if ($(window).width() < 767) {
                $(this).next().slideToggle();
                $(this).toggleClass("active");
            }
        });
    }
    footer_dropdown();

    // Resize Function 
    var resizeTimer;
    $(window).resize(function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $(window).trigger('delayed-resize', e);
        }, 250);
    });
    $(window).on("load resize", function(e) {
        if ($(window).width() > 767) {
            $(".footer-links ul").show();
        } else {
            $(".footer-links ul").hide();
        }
    });


    /* Blog Pages Sidebar Widget +/- */
    function blog_sidebar_dropdown() {
        $(".blog-sidebar .widget-title").on("click", function() {
            if ($(window).width() < 991) {
                $(this).next().slideToggle('300');
                $(this).toggleClass("active");
            }
        });
    }
    blog_sidebar_dropdown();
    $(window).on("load resize", function(e) {
        if ($(window).width() > 991) {
            $(".blog-sidebar .widget-content").show();
        } else {
            $(".blog-sidebar .widget-content").hide();
        }
    });

    /*-------------------------------
     Show hide Product Tags
     ----------------------------------*/
    $(".product-tags li").eq(10).nextAll().hide();
    $('.btnview').on('click', function() {
        $(".product-tags li").not('.filter--active').show();
        $(this).hide();
    });

    /*-------------------------------
     Show hide Product Filters
     ----------------------------------*/
    $('.btn-filter').on("click", function() {
        $(".filterbar").toggleClass("active");
    });
    $('.closeFilter').on("click", function() {
        $(".filterbar").removeClass("active");
    });
    // Hide Cart on document click
    $("body").on('click', function(event) {
        var $target = $(event.target);
        if (!$target.parents().is(".filterbar") && !$target.is(".btn-filter")) {
            $(".filterbar").removeClass("active");
        }
    });

    /*-------------------------------
     Timer Count Down
     ----------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="ht-count days"><span class="count-inner"><span class="time-count">%-D</span> <span>Days</span></span></span> <span class="ht-count hour"><span class="count-inner"><span class="time-count">%-H</span> <span>HR</span></span></span> <span class="ht-count minutes"><span class="count-inner"><span class="time-count">%M</span> <span>Min</span></span></span> <span class="ht-count second"><span class="count-inner"><span class="time-count">%S</span> <span>Sc</span></span></span>'));
        });
    });

    /*-------------------------------
     Scroll Top
     ---------------------------------*/
    function scroll_top() {
        $("#site-scroll").on("click", function() {
            $("html, body").animate({ scrollTop: 0 }, 100);
            return false;
        });
    }
    scroll_top();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#site-scroll").fadeIn();
        } else {
            $("#site-scroll").fadeOut();
        }
    });

    /*-------------------------------
     Height Product Grid Image
     ----------------------------------*/
    function productGridView() {
        var gridRows = [];
        var tempRow = [];
        productGridElements = $('.grid-products .item');
        productGridElements.each(function(index) {
            if ($(this).css('clear') != 'none' && index != 0) {
                gridRows.push(tempRow);
                tempRow = [];
            }
            tempRow.push(this);

            if (productGridElements.length == index + 1) {
                gridRows.push(tempRow);
            }
        });

        $.each(gridRows, function() {
            var tallestHeight = 0;
            var tallestHeight1 = 0;
            $.each(this, function() {
                $(this).find('.product-image > a').css('height', '');
                elHeight = parseInt($(this).find('.product-image').css('height'));
                if (elHeight > tallestHeight) {
                    tallestHeight = elHeight;
                }
            });

            $.each(this, function() {
                if ($(window).width() > 768) {
                    $(this).find('.product-image > a').css('height', tallestHeight);
                }
            });
        });
    }

    /*--------------------------
     Product Zoom
     ---------------------------- */
    function product_zoom() {
        $(".zoompro").elevateZoom({
            gallery: "gallery",
            galleryActiveClass: "active",
            zoomWindowWidth: 300,
            zoomWindowHeight: 100,
            scrollZoom: false,
            zoomType: "inner",
            cursor: "crosshair"
        });
    }
    product_zoom();

    /*----------------------------
     Product Detail Slider
     ------------------------------ */
    /* Product Detail Vertical Thumb Slider */
    function product_thumb() {
        $('.product-dec-slider-2').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 5,
            vertical: true,
            verticalSwiping: true,
            centerPadding: '0',
            draggable: true,
            slidesToScroll: 1
        });
    }
    product_thumb();

    /* Product Detail Page Horizontal Thumb Slider */
    function product_thumb1() {
        $('.product-thumb-style1').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 5,
            stageMargin: 5,
            slidesToScroll: 1
        });
    }
    product_thumb1();

    /* Product Detail Page Horizontal 2 Slide with Thumb Slider 2 */
    function product_single_style2() {
        $('.product-single-style2').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            fade: false,
            infinite: false,
            speed: 1000,
            asNavFor: '.product-thumb-style2'
        });
        $('.product-thumb-style2').not('.slick-initialized').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.product-single-style2',
            dots: false,
            infinite: false,
            centerMode: false,
            focusOnSelect: true
        });
    }
    product_single_style2();

    /* Product Detail Page Center Slider */
    function product_center_mode() {
        $('.product-center-style3').not('.slick-initialized').slick({
            centerMode: true,
            infinite: true,
            centerPadding: '0',
            slidesToShow: 3,
            speed: 500,
            variableWidth: false,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_center_mode();


    /*----------------------------
     Sticky Header and Product Sticky Bottom Cart
     ------------------------------ */
    function sticky_cart() {
        window.onscroll = function() {
            /* Sticky Header */
            if ($(window).scrollTop() > 145) {
                $('.header-main').addClass("sticky-header animated fadeInDown");
            } else {
                $('.header-main').removeClass("sticky-header fadeInDown");
            }
            /* End Sticky Header */

            $(window).scrollTop() > 600 && $(".stickyCart").length ? (
                $("body.template-product").css("padding-bottom", "70px"),
                $(".stickyCart").slideDown()) : ($("body.template-product").css("padding-bottom", "0"),
                $(".stickyCart").slideUp());
        };
        $(".stickyOptions .selectedOpt").on("click", function() {
                $(".stickyOptions ul").slideToggle("fast");
            }),
            $(".stickyOptions .vrOpt").on("click", function(e) {
                var t = $(this).attr("data-val"),
                    s = $(this).attr("data-no"),
                    a = $(this).text();
                $(".selectedOpt").text(a), $(".stickyCart .selectbox").val(t).trigger("change"), $(".stickyOptions ul").slideUp("fast"), this.productvariants = JSON.parse(document.getElementById("ProductJson-" + i).innerHTML), $(".stickyCart .product-featured-img").attr("src", this.productvariants.variants[s].featured_image.src.replace(/(\.[^\.]*$|$)/, "_60x60$&"));
            });
    }
    sticky_cart();

    /*--------------------------
     Product Page Popup
     ---------------------------- */
    function video_popup() {
        if ($('.popup-video').length) {
            $('.popup-video').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-zoom-in',
                removalDelay: 400,
                preloader: false,
                fixedContentPos: false
            });
        }
    }
    video_popup();

    /* Size Popup */
    function size_popup() {
        $('.sizelink').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-zoom-in',
            removalDelay: 400
        });
    }
    size_popup();

    /*ShippingInfo Popup */
    function shippingInfo_popup() {
        $('.shippingInfo').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-zoom-in',
            removalDelay: 400
        });
    }
    shippingInfo_popup();

    /* Inquiry Popup */
    function inquiry_popup() {
        $('.emaillink').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-zoom-in',
            removalDelay: 400
        });
    }
    inquiry_popup();

    /* Portfolio Popup */
    function portfolio_popup() {
        $('.portfolio-popup').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-zoom-in',
            removalDelay: 400
        });
    }
    portfolio_popup();

    /*----------------------------------
     Quantity Plus Minus
     ------------------------------------*/
    function qnt_incre() {
        $(".qtyBtn").on("click", function() {
            var qtyField = $(this).parent(".qtyField"),
                oldValue = $(qtyField).find(".qty").val(),
                newVal = 1;

            if ($(this).is(".plus")) {
                newVal = parseInt(oldValue) + 1;
            } else if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            }
            $(qtyField).find(".qty").val(newVal);
        });
    }
    qnt_incre();

    /*----------------------------------
     Visitor Fake Message
     ------------------------------------*/
    var userLimit = $(".userViewMsg").attr('data-user'),
        userTime = $(".userViewMsg").attr('data-time');
    $(".uersView").text(Math.floor((Math.random() * userLimit)));
    setInterval(function() {
        $(".uersView").text(Math.floor((Math.random() * userLimit)));
    }, userTime);

    /*-----------------------------------
     Tabs With Accordian Responsive
     -------------------------------------*/
    $(".tab_content").hide();
    $(".tab_content:first").show();
    /* if in tab mode */
    $("ul.tabs li").on('click', function() {
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

        $('.productSlider').slick('refresh');
        $('.productSlider-style2').slick('refresh');
    });
    /* if in drawer mode */
    $(".tab_drawer_heading").on('click', function() {
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("d_active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("d_active");

        $('.productSlider').slick('refresh');
        $('.productSlider-style2').slick('refresh');
    });
    $('ul.tabs li').last().addClass("tab_last");


    /*----------------------------------
     Product Tabs
     ------------------------------------*/
    $(".tab-content").hide();
    $(".tab-content:first").show();
    /* if in tab mode */
    $(".product-tabs li").on('click', function() {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".product-tabs li").removeClass("active");
        $(this).addClass("active");

        $(this).fadeIn();
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({ scrollTop: tabposition.top - 70 }, 700);
        }
    });

    $('.product-tabs li:first-child').addClass("active");
    $('.tab-container h3:first-child + .tab-content').show();

    /* if in drawer mode */
    $(".acor-ttl").on("click", function() {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".acor-ttl").removeClass("active");
        $(this).addClass("active");
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({ scrollTop: tabposition.top }, 700);
        }
    });

    /* Below 767 Accordian style */
    $(".tabs-ac-style").on("click", function() {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".tabs-ac-style").removeClass("active");
        $(this).addClass("active");

        $(this).fadeIn();
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({ scrollTop: tabposition.top }, 700);
        }
    });

    /* --------------------------------------
     Image to background js
     -------------------------------------- */
    $(".bg-top").parent().addClass('b-top');
    $(".bg-bottom").parent().addClass('b-bottom');
    $(".bg-center").parent().addClass('b-center');
    $(".bg-left").parent().addClass('b-left');
    $(".bg-right").parent().addClass('b-right');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up").parent().addClass('');
    jQuery('.bg-img').each(function() {
        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat'
        });
        el.hide();
    });

    /*----------------------------------
     Sticky Product Slider
     ------------------------------------*/
    function sticky_pro_slider() {
        $('.product-single-style2 .product-details-img').slick({
            dots: false,
            infinite: false,
            item: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        $(window).width() > 767 ? $(".product-single-style2 .product-details-img").slick("unslick") : $(".product-single-style2 .product-details-img").slick("refresh");
    }
    sticky_pro_slider();

    function sticky_pro_slider_style4() {
        $('.product-single-style4 .product-details-img .row').slick({
            dots: false,
            infinite: false,
            item: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        $(window).width() > 767 ? $(".product-single-style4 .product-details-img .row").slick("unslick") : $(".product-single-style4 .product-details-img .row").slick("refresh");
    }
    sticky_pro_slider_style4();


    /*-----------------------------------
     Infinite Scroll js
     -------------------------------------*/
    function load_more() {
        $(".product-load-more .item").slice(0, 12).show();
        $(".loadMore").on('click', function(e) {
            e.preventDefault();
            $(".product-load-more .item:hidden").slice(0, 4).slideDown();
            if ($(".product-load-more .item:hidden").length == 0) {
                $(".infinitpagin").html('<div class="btn rounded loadMore">no more products</div>');
            }
        });
    }
    load_more();

    function load_more_five() {
        $(".product-five-load-more .item").slice(0, 10).show();
        $(".loadMoreFive").on('click', function(e) {
            e.preventDefault();
            $(".product-five-load-more .item:hidden").slice(0, 5).slideDown();
            if ($(".product-five-load-more .item:hidden").length == 0) {
                $(".infinitpagin-five").html('<div class="btn rounded loadMoreFive">no more products</div>');
            }
        });
    }
    load_more_five();

    function load_more_listview() {
        $(".product-load-more .list-product").slice(0, 7).show();
        $(".loadMore").on('click', function(e) {
            e.preventDefault();
            $(".product-load-more .list-product:hidden").slice(0, 5).slideDown();
            if ($(".product-load-more .list-product:hidden").length == 0) {
                $(".infinitpagin").html('<div class="btn rounded loadMore">no more products</div>');
            }
        });
    }
    load_more_listview();

    function load_more_post() {
        $(".blog--grid-load-more .article").slice(0, 5).show();
        $(".loadMorepost").on('click', function(e) {
            e.preventDefault();
            $(".blog--grid-load-more .article:hidden").slice(0, 1).slideDown();
            if ($(".blog--grid-load-more .article:hidden").length == 0) {
                $(".loadmore-post").html('<div class="btn btn-lg rounded loadMorepost">No more Blog Post</div>');
            }
        });
    }
    load_more_post();
    /*-----------------------------------
     End Infinite Scroll js
     -------------------------------------*/

    /* --------------------------------------
     QuickView Popup
     -------------------------------------- */
    function quick_view_popup() {
        $("body").on("click", ".quick-view-popup", function(e) {
            $.ajax({
                beforeSend: function() {
                    $("body").addClass("loading");
                },
                complete: function() {
                    $("body").removeClass("loading");
                }
            });
        });

        $('.quick-view-popup').magnificPopup({
            items: {
                src: '#quickView-modal'
            },
            type: 'inline',
            midClick: true,
            removalDelay: 500,
            mainClass: 'mfp-zoom-in'
        });
    }
    quick_view_popup();

    /*------------------------------------
     Tooltip
     -------------------------------------*/
    function tooltip() {
        if ($(window).width() > 991) {
            // $('[data-toggle="tooltip"]').tooltip();
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl, {
                    trigger: 'hover'
                });
            });
        }
    }
    tooltip();

    /*------------------------------------
     Product Grid-List change view
     -------------------------------------*/
    function prd_change_view() {
        $('.change-view').on('click', function(e) {
            if ($(this).hasClass('prd-grid')) {
                $('.grid--view-items').removeClass('prd-list').addClass('prd-grid');
            } else if ($(this).hasClass('prd-list')) {
                $('.grid--view-items').removeClass('prd-grid').addClass('prd-list');
            }
        });

        $('.change-view').on('click', function() {
            $('.change-view').removeClass('change-view--active');
            $(this).addClass('change-view--active');
        });
    }
    prd_change_view();

    /*------------------------------------
     Write Review Toggle Box
     -------------------------------------*/
    function write_review() {
        $(".write-review-btn").on("click", function(e) {
            $('.write-review-btn').toggleClass('active');
            $(".product-review-form").slideToggle();
            e.preventDefault();
        });
    }
    write_review();

    /*------------------------------------
     Background Parallax image
     -------------------------------------*/
    function background_parallax_img() {
        var parallax = -0.5;
        var $bg_images = $(".background-parallax");
        var offset_tops = [];
        $bg_images.each(function(i, el) {
            offset_tops.push($(el).offset().top);
        });

        $(window).scroll(function() {
            var dy = $(this).scrollTop();
            $bg_images.each(function(i, el) {
                var ot = offset_tops[i];
                $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
            });
        });
    }
    background_parallax_img();


    function AddtoCart() {
        $(".minicart-bottom .btn").on('click', function() {
            $(".minicart-right-drawer").removeClass('show');
            $(".modal-backdrop").removeClass('show');
        });
    }
    AddtoCart();
});