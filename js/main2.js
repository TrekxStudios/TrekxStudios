/* ===================================================================
 * Hudson 1.0.0 - Main JS
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';

    /* ===================================================================
     * HELPER FUNCTIONS
     * ------------------------------------------------------------------- */

    const ssPreloader = function() {
        const siteBody = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');

        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    siteBody.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });
        });
    };

    const ssMoveHeader = function () { /* ... same as before ... */ };
    const ssMobileMenu = function() { /* ... same as before ... */ };
    const ssScrollSpy = function() { /* ... same as before ... */ };
    const ssGLightbox = function() { /* ... same as before ... */ };
    const ssSwiper = function() { /* ... same as before ... */ };
    const ssAlertBoxes = function() { /* ... same as before ... */ };
    const ssBackToTop = function() { /* ... same as before ... */ };
    const ssMoveTo = function() { /* ... same as before ... */ };

    /* ===================================================================
     * SITE INITIALIZATION FUNCTION
     * ------------------------------------------------------------------- */
    const ssInit = function() {
        ssPreloader();
        ssMoveHeader();
        ssMobileMenu();
        ssScrollSpy();
        ssGLightbox();
        ssSwiper();
        ssAlertBoxes();
        ssMoveTo();
    };

    /* ===================================================================
     * INTRO VIDEO LOGIC
     * ------------------------------------------------------------------- */
    const overlay = document.getElementById("intro-overlay");
    const video = document.getElementById("intro-video");
    const main = document.getElementById("main-content");
    const fadeDuration = 0.7; // seconds before video ends to start fade

    const hasSeenIntro = localStorage.getItem("seenIntro");

    const runSiteInit = () => ssInit();

    if (hasSeenIntro) {
        // Returning visitor: skip video
        overlay.style.display = "none";
        main.style.display = "";
        runSiteInit();
    } else {
        // First-time visitor: play video
        video.addEventListener("ended", () => {
            localStorage.setItem("seenIntro", "true");
        });

        video.addEventListener("timeupdate", () => {
            if (video.duration - video.currentTime <= fadeDuration && !overlay.classList.contains("hidden")) {
                overlay.classList.add("hidden");
            }
        });

        overlay.addEventListener("transitionend", (e) => {
            if (e.propertyName === "opacity" && overlay.classList.contains("hidden")) {
                overlay.style.display = "none";
                main.style.display = "";
                //delay 
                if (document.readyState === "complete") {
                runSiteInit(); // initialize site after overlay fades
            }
            else {
                window.addEventListener("load", runSiteInit);
            }
        }
        });
    }

})(document.documentElement);
