

window.addEventListener("scroll", () => {
  scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".parallax");
  for (const i of parallax) {
    let coords = '0% ' + (-(scrolled * 0.3) + 'px');
    i.style.backgroundPosition = coords;
    console.log(coords);
    console.log(scrolled)
  }

});

// Just the for Loop and it´s done.

/* window.removeEventListener('click', sameFunctionAsBefore) */

