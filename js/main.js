/* eslint-env jquery, browser */

$(document).ready(function () {
    var scrollEl = document.scrollingElement || document.documentElement;
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $("#enter-btn").click(function () {
        $("#credit-tooltip").tooltip("dispose");
        $("#intro-tooltip").tooltip("dispose");
        $("#splash-tooltip").tooltip("dispose");
        $("#splash").addClass("animate__animated animate__fadeOut");

        setTimeout(function () {
            $("#splash").remove();
        }, 800);

        setTimeout(function () {
            $("#header").removeClass("d-none");
            $("#footer").removeClass("d-none");
            $("#ar-btn").removeClass("d-none");
        }, 800);

        setTimeout(function () {
            $("#main-tooltip").tooltip("toggle");
        }, 1000);
    });

    $("#mobile").click(function () {
        window.open(window.location.href, "targetWindow", "toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=400px, height=800px");
    });

    $("#ar-btn").click(function () {
        $("#map").addClass("d-none");
        $("#map-btn").removeClass("d-none");
        $("#ar-btn").tooltip("hide");
        scrollEl.addEventListener('wheel', transformScroll, { passive: false});
    });

    $("#map-btn").click(function () {
        $("#map").removeClass("d-none");
        $("#map-btn").tooltip("hide");
        scrollEl.removeEventListener('wheel', transformScroll);
    });

    $("#profile").on("shown.bs.modal click", function () {
        $("#profile-modal").trigger("focus");
        $("#main-tooltip").tooltip("hide");
        $("#header").addClass("d-none");
        $("#footer").addClass("d-none");
        scrollEl.removeEventListener('wheel', transformScroll);
    });

    $("#profile-modal").on("hidden.bs.modal", function () {
        $("#header").removeClass("d-none");
        $("#footer").removeClass("d-none");
        scrollEl.addEventListener('wheel', transformScroll, { passive: false});
    });

    $("#friends").on("shown.bs.modal click", function () {
        $("#friends-modal").trigger("focus");
        $("#main-tooltip").tooltip("hide");
        $("#header").addClass("d-none");
        $("#footer").addClass("d-none");
        scrollEl.removeEventListener('wheel', transformScroll);
    });

    $("#friends-modal").on("hidden.bs.modal", function () {
        $("#header").removeClass("d-none");
        $("#footer").removeClass("d-none");
        scrollEl.addEventListener('wheel', transformScroll, { passive: false});
    });

    $("#search").on("shown.bs.modal click", function () {
        $("#search-modal").trigger("focus");
        $("#main-tooltip").tooltip("hide");
        $("#header").addClass("d-none");
        $("#footer").addClass("d-none");
        scrollEl.removeEventListener('wheel', transformScroll);
    });

    $("#search-modal").on("hidden.bs.modal", function () {
        $("#header").removeClass("d-none");
        $("#footer").removeClass("d-none");
        scrollEl.addEventListener('wheel', transformScroll, { passive: false});
    });

    function transformScroll(event) {
        if (!event.deltaY) {
            return;
        }

        event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
        event.preventDefault();
    }
});
