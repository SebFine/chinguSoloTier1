document.addEventListener("DOMContentLoaded", ()=>{

    const parallax = document.getElementsByClassName('parallax');
    const xScrollPosition;
    const yScrollPosition;

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }

    function scrollLoop() {
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;


      setTranslate(0, yScrollPosition * -0.2, element);

  }

    window.addEventListener("scroll", scrollLoop, false);

});
