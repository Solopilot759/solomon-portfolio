/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("nav-open");

            menuToggle.classList.toggle("menu-open");

        });


        /* Close menu after clicking a link */

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("nav-open");

                menuToggle.classList.remove("menu-open");

            });

        });

    }


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
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
        ".case-overview, " +
        ".case-image, " +
        ".case-tech, " +
        ".next-project"
    );


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
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =================================================
       NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                navbar.classList.add("navbar-scrolled");

            } else {

                navbar.classList.remove("navbar-scrolled");

            }

        });

    }


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    document.querySelectorAll(".nav-links a").forEach(link => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /* =================================================
       SMOOTH ANCHOR SCROLLING
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

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
       BUTTON / LINK MAGNETIC FEEL
    ================================================= */

    const interactiveElements = document.querySelectorAll(
        ".project-link, " +
        ".email-cta, " +
        ".submit-button"
    );


    interactiveElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            element.style.transform =
                "translateY(-3px)";

        });


        element.addEventListener("mouseleave", () => {

            element.style.transform =
                "";

        });

    });


    /* =================================================
       PAGE LOAD
    ================================================= */

    document.body.classList.add("page-loaded");

});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}