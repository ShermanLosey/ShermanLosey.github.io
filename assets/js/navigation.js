document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("#main > section");
    const navLinks = document.querySelectorAll("#navigation .nav-link");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - window.innerHeight / 3) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();

});