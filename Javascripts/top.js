document.addEventListener("DOMContentLoaded", function () {
    /* Variable to get ID name from html*/
    var backToTopButton = document.getElementById("backToTopBtn");

    /* Scroll function*/
    window.onscroll = function () {
        /* Once user scroll over 20units, button will appear, if not button will be hidden*/
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function () {
        scrollToTop();
    };

    /* Scrolling to top function*/
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            /* Smooth scrolling behavior*/
            behavior: "smooth"
        });
    }
});