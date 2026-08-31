/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("bi-list");
            icon.classList.add("bi-x");
        } else {
            icon.classList.remove("bi-x");
            icon.classList.add("bi-list");
        }

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("bi-x");
                icon.classList.add("bi-list");
            }

        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("Please fill all the fields.");

            return;
        }

        const emailBody =
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message;

        const mailTo =
            "mailto:alaguvigneshnagarajan@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(emailBody);

        window.location.href = mailTo;

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, " +
    ".achievement-card, .education-card, .about-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

if (sections.length > 0) {

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navItems.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });

}


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* =========================================
   PROJECT LINKS
========================================= */

/*
   GitHub links are added directly in index.html.

   Example:

   <a href="https://github.com/username/project"
      target="_blank"
      rel="noopener noreferrer">

       <i class="bi bi-github"></i>
       GitHub

   </a>

   JavaScript is NOT required for GitHub links.
*/