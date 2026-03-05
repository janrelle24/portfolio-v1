const wrapper = document.querySelector(".image-wrapper");
const img = document.querySelector(".reveal-img");

if (wrapper) {
    wrapper.addEventListener("click", () => {
        img.classList.toggle("active");
    });
}