(function ($) {
    "use strict";
    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var nav = undefined;
        var init = function init() {
            body = document.querySelector('body');
            nav = document.querySelector('.navigation');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            nav.addEventListener('click', function () {
                return toggleClass(body, 'nav-active'), nav.classList.toggle('open');
            });

        };

        var toggleClass = function toggleClass(element, stringClass) {
            nav.classList.toggle('open');
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };
        init();
    }();




})(jQuery);
