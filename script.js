const container = document.querySelector(".container");
const dots = document.querySelectorAll(".dot");
const pages = document.querySelectorAll(".page");

function scrollToSection(index) {
    pages[index].scrollIntoView({ behavior: "smooth" });
}

container.addEventListener("scroll", () => {
    let index = Math.round(container.scrollTop / window.innerHeight);
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
});
