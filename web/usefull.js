
    jq(function () {
        if (jq('#back-to-top').length) {
            var scrollTrigger = 100; // px
            jq(window).on('scroll', function () {
                if (jq(window).scrollTop() > scrollTrigger) {
                    jq('#back-to-top').addClass('show');
                } else {
                    jq('#back-to-top').removeClass('show');
                }
            });
            //回到顶部
            jq('#back-to-top').on('click', function (e) {
                // html,body 都写是为了兼容浏览器
                jq('html,body').animate({
                    scrollTop: 0
                }, 700);
                return false;
            });
        }
    });

