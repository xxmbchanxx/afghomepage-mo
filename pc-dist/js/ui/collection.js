(() => {


  // photo scroll trigger 
  window.addEventListener('load', function () {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        markers: false, // 개발가이드선
        end: "bottom bottom",
        // end: () => innerHeight * 4,
        scrub: true,
        pin: ".grid",
        anticipatePin: 1
      }
    })
      .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
      .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1, }, 0.001)
      .from(".gridLayer", {
        scale: 4,
        // scale : 5,
        ease: "none",
      });
  
  })

  // sub visual bg
  // sub visual
  let ovf, slider

  $(function () {
    ovf = this.getElementById("collection-contents-wrap");
    slider = this.getElementById("collection-visual");
    winResize();
    $(window).bind({ resize: winResize, scroll: winScroll });
  });

  function winResize() {
    ovf.style.top = slider.offsetHeight + "px";
  }

  function winScroll() {
    let op = 1 - (window.pageYOffset / slider.offsetHeight);
  }

})();