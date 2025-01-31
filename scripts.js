const images = [
    "fifi/1mt.jpg",
    "fifi/caferun.jpg",
    "fifi/whitecat.jpg",
    "fifi/tokai1.jpg"
];

let currentIndex = 0;
const slideImg = document.getElementById("slide-img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function changeImage(index) {
    slideImg.classList.add("fade-out");
    setTimeout(() => {
        slideImg.src = images[index];
        slideImg.classList.remove("fade-out");
        slideImg.classList.add("fade-in");
    }, 300);
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
});
