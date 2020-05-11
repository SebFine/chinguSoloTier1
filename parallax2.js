    let scrolled = 0;
    window.addEventListener("scroll", () => {
      scrolled = window.pageYOffset;
      const parallax = document.querySelector(".banner");
      let coords = '0% '+ (- (scrolled *0.38) + 'px');
      parallax.style.backgroundPosition = coords;
      console.log(coords);
      console.log(scrolled)
    });

    // Just the for Loop and it´s done.