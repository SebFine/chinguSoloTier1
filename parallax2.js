/* parallax function */
window.addEventListener("scroll", () => {
  scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".parallax");
  for (const i of parallax) {
    let coords = '0% ' + (-(scrolled * 0.2) + 'px');
    i.style.backgroundPosition = coords;
  }
});

window.addEventListener("scroll", () => {
  scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".parallax2");
  for (const i of parallax) {
    let coords = '0% ' + (-((scrolled - scrolled * 0.95) * 2) + 'px');
    console.log(scrolled);
    i.style.backgroundPosition = coords;
  }
});

window.addEventListener("scroll", () => {
  scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".parallax3");
  for (const i of parallax) {
    let coords = '0% ' + (-(scrolled * 0.00002 ) + 'px');
    i.style.backgroundPosition = coords;
  }
});

/* navbar state on click */

const navBtns = document.querySelectorAll(".navBtn")

for (const i of navBtns) {
  i.addEventListener("click", () => {
    const current = document.querySelector(".active");
    current.classList.remove("active");
    i.classList.add("active");
  })
};

// menue button

const menue = document.querySelector(".menue")
const nav = document.querySelector("#show-menue")

menue.addEventListener("click", () => {
  nav.classList.toggle("none");
});