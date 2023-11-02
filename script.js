const toggle = document.querySelector(".toggle_icon");

toggle.addEventListener("click", () => {
    toggle.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode');
})