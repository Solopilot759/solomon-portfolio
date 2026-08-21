/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector(".navbar");

    if (menuToggle && navLinks && header) {

        const scrim = document.createElement("div");
        scrim.className = "nav-scrim";
        header.after(scrim);

        const closeMenu = () => {
            navLinks.classList.remove("nav-open");
            scrim.classList.remove("nav-open");
            menuToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-locked");
        };

        const openMenu = () => {
            navLinks.classList.add("nav-open");
            scrim.classList.add("nav-open");
            menuToggle.setAttribute("aria-expanded", "true");
            document.body.classList.add("menu-locked");
        };

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.contains("nav-open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        scrim.addEventListener("click", closeMenu);

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        /* Close the drawer if the viewport grows past the
           mobile breakpoint while it's open */

        window.addEventListener("resize", () => {

            if (window.innerWidth >= 900) {
                closeMenu();
            }

        });

    }


    /* =================================================
       NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 40) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }

        };

        updateNavbar();

        window.addEventListener("scroll", updateNavbar, { passive: true });

    }


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        link.classList.toggle("active", linkPage === currentPage);

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".home-section-heading, " +
        ".home-project-row, " +
        ".project-card, " +
        ".projects-cta, " +
        ".about-grid, " +
        ".interest-card, " +
        ".focus-content, " +
        ".skill-row, " +
        ".framework-card, " +
        ".tools-cloud, " +
        ".learning-content, " +
        ".contact-info, " +
        ".contact-form-wrapper, " +
        ".project-feature, " +
        ".case-overview, " +
        ".case-image, " +
        ".case-tech, " +
        ".next-project"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);

                });

            },
            { threshold: 0.12 }
        );

        revealElements.forEach(element => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });

    }


    /* =================================================
       SMOOTH ANCHOR SCROLLING
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId.length < 2) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =================================================
       PAGE LOAD
    ================================================= */

    document.body.classList.add("page-loaded");

});