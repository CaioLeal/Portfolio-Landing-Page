export function initHome() {
    let text = document.querySelector(".text p");

    text.innerHTML = text.innerHTML.split("").map((char, i) => 
        `<b style="transform: rotate(${i * 6.3}deg)">${char}</b>`
    ).join("");

    ScrollReveal({
    distance: "90px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading');
}