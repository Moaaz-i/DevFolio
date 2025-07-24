document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  });
});

var typed = new Typed("#typedText", {
  strings: ["developer", "freelancer", "photographer", "designer"],
  typeSpeed: 60,
  backSpeed: 70,
  loop: true,
  showCursor: true,
  smartBackspace: true,
});
