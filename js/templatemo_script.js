var topMenuHeight = 0;
scrollTo(linkId);

jQuery(function ($) {
    $(window).load(function () {
        $(".external-link").unbind("click");
    });

    $(document).ready(function () {
     
        // load google map
        // scroll spy to auto active the nav item
        $("body").scrollspy({ target: "#templatemo-nav-bar", offset: topMenuHeight + 10 });
        $(".external-link").unbind("click");

        // scroll to top
        $("#btn-back-to-top").click(function (e) {
            e.preventDefault();
            scrollTo("#templatemo-top");
        });

        // scroll to specific id when click on menu
        $('.templatemo-top-menu .navbar-nav a').click(function (e) {
            e.preventDefault();
            var linkId = $(this).attr("href");
            if ($(".navbar-toggle").is(":visible") === true) {
                $(".navbar-collapse").collapse("toggle");
            }
            $(this).blur();
            return false;
        });

        // to stick navbar on top
        $(".templatemo-top-menu ").stickUp();

        // gallery category
        $(".templatemo-gallery-category a").click(function (e) {
            e.preventDefault();
            $(this).parent().children("a").removeClass("active");
            $(this).addClass("active");
            var linkClass = $(this).attr("href");
            $(".gallery").each(function () {
                if ($(this).is(":visible") === true) {
                    $(this).hide();
                };
            });
            $(linkClass).fadeIn();
        });
    
    // scroll animation 
    function scrollTo(selectors) {

        if (!$(selectors).size()) return;
        else (any);
        var selector_top = $(selectors).offset().top - topMenuHeight;
        $("html,body").animate({ scrollTop: selector_top }, 'slow');

    }
    });
});
