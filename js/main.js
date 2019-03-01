(function () {
    "use strict";

    // Back To Top button
    function back_to_top() {
        $('.back-to-top').hide();
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 400) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }

            return false;
        });
        $('.back-to-top a').on('click', function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        });
    }

    function makeTimer() {
        var endTime = new Date('10 May 2019 9:56:00');
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < '10') { hours = '0' + hours; }
        if (minutes < '10') { minutes = '0' + minutes; }
        if (seconds < '10') { seconds = '0' + seconds; }

        $('.days').html(days + '<span class="d-block color-silver">DAYS</span>');
        $('.hours').html(hours + '<span class="d-block color-silver">HOURS</span>');
        $('.minutes').html(minutes + '<span class="d-block color-silver">MINS</span>');
        $('.seconds').html(seconds + '<span class="d-block color-silver">SECS</span>');
    }

    $(document).ready(function () {
        back_to_top();

        // Menu Right
        $('.popup-title').on('click', function () {
            $('.h-top').addClass('open-popup')
        });
        $('.close-info ').on('click', function () {
            $('.h-top').removeClass('open-popup')
        });

        // Create menu for mobile
        $('.all').after('<div id="off-mainmenu"><div class="off-mainnav"><div class="off-close"><span class="btn-menu"></span><span class="close-menu float-right"><i class="cs-icon icon-close"></i></span></div></div></div>');
        $('.menu-main').clone().appendTo('.off-mainnav');
        $('.off-mainnav .menu-main li.dropdown, .off-mainnav .menu-main li.menu-relative').each(function () {
            $(this).find('a').first().after('<span class="icon-down"><i class="fa fa-angle-down"></i></span>');
        });

        $('.open-menu-left-mobile').on('click', function (e) {
            e.preventDefault();
            $('body').addClass('mainmenu-active');
        });

        $('.close-menu').on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('mainmenu-active');

            return false;
        });

        $('.icon-down').on('click', function (e) {
            $(this).closest('li').find('.dropdown-menu').first().toggleClass('tiva-active');

            return false;
        });

        $('.open-menu-left').on('click', function (e) {
            e.preventDefault();
            $('.all').toggleClass('show-menu-left');
        });

        // Gallery Detail
        $('.click-animated').on('click', function () {
            $('.detail-left').addClass('toggle-animated');
        });
        $('.close-icon').on('click', function () {
            $('.detail-left').removeClass('toggle-animated');
        });

        // Masonry
        $('.grid').each(function () {
            // Hide last items
            if ($(this).find('.grid-item').length > 9) {
                $(this).find('.grid-item').slice(9, ($(this).find('.grid-item').length)).hide();
            }

            var grid = $(this);
            setTimeout(function () {
                grid.masonry({
                    itemSelector: '.grid-item',
                    gutter: '.gutter-sizer',
                });
            }, 400);
        });

        // Load More
        $('.block-masonry .show-all').on('click', function (e) {
            e.preventDefault();

            // Show last items
            $(this).closest('.tab-pane').find('.grid-item').slice(9, ($(this).closest('.tab-pane').find('.grid-item').length)).slideDown();

            var grid = $(this).closest('.tab-pane').find('.grid');
            setTimeout(function () {
                grid.masonry({
                    itemSelector: '.grid-item',
                    gutter: '.gutter-sizer',
                });
            }, 400);

            // Hide show all button
            $(this).fadeOut('slow');

            // Scroll to last item
            $('html,body').animate({
                scrollTop: grid.find('.grid-item').last().offset().top
            }, 1500);

            return false;
        });

        // Home-3 Show Me All
        // Hide last items
        if ($('.save-love .product-thumb').length > 9) {
            $('.save-love .product-thumb').slice(9, $('.save-love .product-thumb').length).hide();
        }
        $('.save-love .show-all').on('click', function (e) {
            e.preventDefault();

            // Show last items
            $('.save-love .product-thumb:hidden').slideDown();

            // Hide button
            $(this).fadeOut('slow');

            // Scroll to button
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);

            return false;
        });

        // Home-4 What New
        // Hide last items
        if ($('.what-new .border-bottom').length > 3) {
            $('.what-new .border-bottom').slice(3, $('.what-new .border-bottom').length).hide();
        }
        $('.what-new .show-all').on('click', function (e) {
            e.preventDefault();

            // Show last items
            $('.what-new .border-bottom:hidden').slideDown();

            // Hide button
            $(this).fadeOut('slow');

            // Scroll to button
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);

            return false;
        });

        // gallery-class-1 Show Me All
        $('.tab-view-all .tab-pane').each(function () {
            var tab = $(this);

            // Hide last items
            if (tab.find('.thumb-img').length > 9) {
                tab.find('.thumb-img').slice(9, tab.find('.thumb-img').length).hide();
            }

            $(this).find('.show-all').on('click', function (e) {
                e.preventDefault();

                // Show last items
                tab.find('.thumb-img:hidden').slideDown();

                // Hide button
                $(this).fadeOut('slow');

                // Scroll to button
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);

                return false;
            });
        });


        // blog-without1 Show Me All
        $('.tab-view-all .tab-pane').each(function () {
            var tab = $(this);

            // Hide last items
            if (tab.find('.blog-item').length > 4) {
                tab.find('.blog-item').slice(4, tab.find('.blog-item').length).hide();
            }

            $(this).find('.show-all').on('click', function (e) {
                e.preventDefault();

                // Show last items
                tab.find('.blog-item:hidden').slideDown();

                // Hide button
                $(this).fadeOut('slow');

                // Scroll to button
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1000);

                return false;
            });
        });

        // Select Tab
        $('#mySelect').on('change', function (e) {
            $('#myTab li a').eq($(this).val()).tab('show');
        });

        // Page Loader
        setTimeout(function () {
            $('#page-preloader').fadeOut();
        }, 2000);

        // Time Reload Page
        setInterval(function () {
            makeTimer();
        }, 1000);

        // Home-1 Scroll
        $('.scroll-show').on('click', function () {
            $('html, body').animate({
                scrollTop: $(".block-job").offset().top
            }, 1000)
        })

        // Carousel
        $('.slide-show-home-4').owlCarousel({
            loop: true,
            margin: 40,
            stopOnHover: false,
            pagination: false,
            paginationNumbers: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></span>", "<span class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"]
                },
                600: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></span>", "<span class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"]
                },
                1000: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></span>", "<span class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"]
                }
            }
        })

        $('.carousel-home6').owlCarousel({
            margin: 40,
            stopOnHover: false,
            pagination: false,
            paginationNumbers: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'><img class='img-fluid' src='img/slide-show/item-slider.png' alt='img'></span>", "<span class='right'><img class='img-fluid' src='img/slide-show/item-slider2.png' alt='img'></span>"]
                },
                600: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'><img class='img-fluid' src='img/slide-show/item-slider.png' alt='img'></span>", "<span class='right'><img class='img-fluid' src='img/slide-show/item-slider2.png' alt='img'></span>"]
                },
                1000: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'><img class='img-fluid' src='img/slide-show/item-slider.png' alt='img'></span>", "<span class='right'><img class='img-fluid' src='img/slide-show/item-slider2.png' alt='img'></span>"]
                }
            }
        })

        $('.carousel-home7').owlCarousel({
            margin: 40,
            stopOnHover: false,
            pagination: false,
            paginationNumbers: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'></span>", "<span class='right'></span>"]
                },
                600: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'></span>", "<span class='right'></span>"]
                },
                1000: {
                    items: 1,
                    nav: true,
                    navText: ["<span class='left'></span>", "<span class='right'></span>"]
                }
            }
        })

        setTimeout(function () {
            $('.slider-1').owlCarousel({
                loop: true,
                margin: 40,
                stopOnHover: false,
                pagination: false,
                paginationNumbers: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        navText: ["<span class='left'></span>", "<span class='right'></span>"]
                    },
                    600: {
                        items: 2,
                        nav: true,
                        navText: ["<span class='left'></span>", "<span class='right'></span>"]
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        navText: ["<span class='left'></span>", "<span class='right'></span>"]
                    }
                }
            })
        }, 400);

        setTimeout(function () {
            $('.slider-home5').owlCarousel({
                loop: true,
                margin: 30,
                stopOnHover: false,
                pagination: false,
                paginationNumbers: false,
                responsiveClass: true,
                autoWidth: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            })
        }, 400);

        $('.category-product-index').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                600: {
                    items: 3,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
                },
                1000: {
                    items: 3,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]

                }
            }
        });

        $('.testimonial-home5').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 30,
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1

                }
            }
        });

        $('.slider-2').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 40,
            autoplay: true,
            dots: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 4
                }
            }
        })

        $('.detail-slider-1').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 20,
            autoplay: true,
            dots: true,
            autoWidth: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        })

        $('.slider-home4').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            autoplay: true,
            dots: true,
            nav: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    navText: ["<span class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></span>", "<span class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"]
                },
                600: {
                    items: 1,
                    navText: ["<span class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></span>", "<span class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"]
                },
                1000: {
                    items: 1,
                    navText: ["<span class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></span>", "<span class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"]
                }
            }
        })

        $('.icon-logo').owlCarousel({
            loop: true,
            autoplaytimeout: 6000,
            margin: 0,
            autoplay: true,
            nav: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,

                }
            }
        })
    });
})()