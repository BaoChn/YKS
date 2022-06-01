window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});

AOS.init();