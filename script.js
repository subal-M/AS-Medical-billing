/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu when clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   JOB APPLICATION MODAL
========================= */

const applicationModal =
    document.getElementById("applicationModal");

const selectedJob =
    document.getElementById("selectedJob");


function openApplication(jobName) {

    applicationModal.classList.add("active");

    selectedJob.value = jobName;

    document.body.style.overflow = "hidden";

}


function closeApplication() {

    applicationModal.classList.remove("active");

    document.body.style.overflow = "auto";

}


/* Close modal when clicking outside */

applicationModal.addEventListener("click", function (event) {

    if (event.target === applicationModal) {
        closeApplication();
    }

});


/* =========================
   APPLICATION FORM
========================= */

const applicationForm =
    document.getElementById("applicationForm");

applicationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("appName").value;

    const job =
        document.getElementById("selectedJob").value;

    alert(
        `Thank you, ${name}!\n\nYour application for "${job}" has been received.`
    );

    applicationForm.reset();

    closeApplication();

});


/* =========================
   JOB SEARCH
========================= */

const jobSearch =
    document.getElementById("jobSearch");

const jobCards =
    document.querySelectorAll(".job-card");


jobSearch.addEventListener("input", function () {

    const searchValue =
        this.value.toLowerCase().trim();

    jobCards.forEach(card => {

        const jobText =
            card.innerText.toLowerCase();

        if (jobText.includes(searchValue)) {

            card.style.display = "grid";

        } else {

            card.style.display = "none";

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting AS Solution. We will get back to you soon."
    );

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .job-card, .career-benefits > div, .about-box"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "all 0.6s ease";

    revealObserver.observe(element);

});