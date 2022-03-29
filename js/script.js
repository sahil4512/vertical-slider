const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slider");
const slideLeft = document.querySelector(".left-slider");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeslidesIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

arrowUp.addEventListener("click", () => changeSlides("up"));
arrowDown.addEventListener("click", () => changeSlides("down"));

const changeSlides = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeslidesIndex++;
    if (activeslidesIndex > slidesLength - 1) {
      activeslidesIndex = 0;
    }
  } else if (direction === "down") {
    activeslidesIndex--;
    if (activeslidesIndex < 0) {
      activeslidesIndex = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activeslidesIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeslidesIndex * sliderHeight
  }px)`;
};
