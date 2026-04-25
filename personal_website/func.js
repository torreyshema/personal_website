const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-class-bar");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");
        }
    });
}