document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const prevButton = document.querySelector(".nav-button.prev");
    const nextButton = document.querySelector(".nav-button.next");

    if (!hero || !prevButton || !nextButton) {
        return;
    }

    const heroImages = [
        "mountains-5455002_1280.jpg",
        "leaves.png",
        "landscape-oriented i.png",
        "family of four laugh.png",
        "IMG_20250506_192646484_HDR_PORTRAIT.jpg"
    ];

    let currentIndex = 0;

    const renderSlide = () => {
        const imagePath = encodeURI(`images/${heroImages[currentIndex]}`);
        hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("${imagePath}")`;
    };

    const moveSlide = (direction) => {
        currentIndex = (currentIndex + direction + heroImages.length) % heroImages.length;
        renderSlide();
    };

    prevButton.addEventListener("click", () => {
        moveSlide(-1);
    });

    nextButton.addEventListener("click", () => {
        moveSlide(1);
    });

    renderSlide();
});
