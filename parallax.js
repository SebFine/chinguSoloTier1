function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

function scrollLoop() {
  const xScrollPosition = window.scrollX;
  const yScrollPosition = window.scrollY;


  for (let parallaxElement in parallaxElements) {
    setTranslate(0, yScrollPosition * -0.2, parallaxElement);
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const parallaxElements = document.getElementsByClassName('parallax');

    window.addEventListener("scroll", scrollLoop, false);
});
