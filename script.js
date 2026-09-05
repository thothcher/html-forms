document.querySelectorAll(".flip-wrap").forEach((wrap) => {
    const scene = wrap.querySelector(".flip-card-scene");
    const toggle = wrap.querySelector(".flip-toggle");

    toggle.addEventListener("click", () => {
        const isFlipped = scene.classList.toggle("is-flipped");
        toggle.textContent = isFlipped ? "Back to Preview" : "View the Code";
        toggle.setAttribute("aria-pressed", String(isFlipped));
    });
});
