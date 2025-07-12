const sections = document.querySelectorAll("section");
const backToTopBtn = document.getElementById("backToTop");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section, index) => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  // Show or hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll smoothly to top when clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

