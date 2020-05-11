function setTranslate(yPos, el) {
    el.style.transform = "translate3d(" + 0 + ", " + yPos + "px, 0)";
  }
  
  function scrollLoop() {
    
    const yScrollPosition = window.scrollY;
    // const parallaxElements = document.querySelectorAll('.parallax');
    console.log(yScrollPosition);
  
    // for (const parallaxElement of parallaxElements) {
    //   setTranslate(yScrollPosition * -0.6, parallaxElement) 
    //   el.style.transform = "translate3d(" + 0 + ", " + yPos + "px, 0)";
    // }
  }
  
  document.addEventListener("DOMContentLoaded", ()=>{
      window.addEventListener("scroll", scrollLoop, false);
    });