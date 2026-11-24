/* ===== RESHIKESH YADAV - CUSTOM MOBILE NAVIGATION =====
   Replaces the original Space Science mobile icon images with
   CSS-drawn hamburger and expandable submenu controls.
*/
document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.getElementById("navigation");
    if (!navigation) return;

    const menuToggle = document.createElement("button");
    menuToggle.type = "button";
    menuToggle.id = "mobile-navigation";
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.setAttribute("aria-controls", "navigation");
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.parentNode.insertBefore(menuToggle, navigation);

    menuToggle.addEventListener("click", function () {
        const opened = navigation.classList.toggle("mobile-open");
        menuToggle.classList.toggle("is-open", opened);
        menuToggle.setAttribute("aria-expanded", String(opened));
        menuToggle.setAttribute("aria-label", opened ? "Close navigation menu" : "Open navigation menu");
    });

    navigation.querySelectorAll("li.menu").forEach(function (item) {
        const submenu = item.querySelector("ul");
        if (!submenu) return;

        const title = item.querySelector("a");
        const submenuToggle = document.createElement("button");
        submenuToggle.type = "button";
        submenuToggle.className = "mobile-submenu";
        submenuToggle.setAttribute("aria-label", "Expand " + (title ? title.textContent.trim() : "") + " submenu");
        submenuToggle.setAttribute("aria-expanded", "false");
        item.appendChild(submenuToggle);

        submenuToggle.addEventListener("click", function () {
            const opened = submenu.classList.toggle("submenu-open");
            submenuToggle.classList.toggle("is-open", opened);
            submenuToggle.setAttribute("aria-expanded", String(opened));
        });
    });
});
