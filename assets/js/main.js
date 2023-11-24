"use strict";
window.addEventListener("DOMContentLoaded", () => {
    /*==================== SHOW MENU ====================*/
    const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }
    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
        navMenu.classList.remove("show-menu");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));
    /*==================== CHANGE BACKGROUND HEADER ====================*/

    window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY >= 100) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("scroll-header");
        }
    });

    /*==================== SWIPER DISCOVER ====================*/
    var swiper = new Swiper(".discover__container ", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 25,
        coverflowEffect: {
            rotate: 0,
        },
    });
    /*==================== VIDEO ====================*/
    const videoFile = document.getElementById("video-file"),
        videoButton = document.getElementById("video-button"),
        videoIcon = document.getElementById("video-icon");

    function playPause() {
        if (videoFile.paused) {
            videoFile.play();
            videoIcon.classList.add("ri-pause-line");
            videoIcon.classList.remove("ri-play-line");
        } else {
            videoFile.pause();
            videoIcon.classList.add("ri-play-line");
            videoIcon.classList.remove("ri-pause-line");
        }
    }
    videoButton.addEventListener("click", playPause);

    function finallVideo() {
        videoIcon.classList.add("ri-play-line");
        videoIcon.classList.remove("ri-pause-line");
    }
    videoFile.addEventListener("ended", finallVideo);
    // ended, when the video ends

    /*==================== SHOW SCROLL UP ====================*/
    const scrollUp = document.getElementById("scroll-up");

    function scrollTop() {
        if (window.scrollY >= 200) {
            scrollUp.classList.add("scrollup-show");
        } else {
            scrollUp.classList.remove("scrollup-show");
        }
    }
    window.addEventListener("scroll", scrollTop);
    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

    /*==================== SCROLL REVEAL ANIMATION ====================*/

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.querySelector("#theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";

    // Previously selected topic (if user selected)

    // We obtain the current theme that the interface has by validating the dark-theme class

    // We validate if the user previously chose a topic

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
    });

    /* SCROLL REVEAL */
    const sr = ScrollReveal({
        distance: "100px",
        duration: 2800,
    });

    sr.reveal(
        `.home__data, .home__social-link, .home__info,
    .discover__container,
    .experience__data, .experience__overlay,
    .place__card,
    .sponsor__content,
    .footer__data, .footer__rights`, {
            origin: "bottom",
            interval: 100,
        }
    );

    sr.reveal(
        `.about__data, 
    .video__description,
    .subscribe__description`, {
            origin: "left",
        }
    );

    sr.reveal(
        `.about__img-overlay, 
    .video__content,
    .subscribe__form`, {
            origin: "right",
            interval: 100,
        }
    );
});