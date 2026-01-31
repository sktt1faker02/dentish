const mobileNav = document.querySelector(".mobile-nav");
const mainNav = document.querySelector(".main-nav");
const navIcon = mobileNav.querySelector("i");
// console.log(mobileNav);

mobileNav.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  mobileNav.classList.toggle("active");

  navIcon.classList.toggle("fa-bars");
  navIcon.classList.toggle("fa-xmark");
  document.body.classList.toggle("no-scroll");
});

document.addEventListener("click", (event) => {
  // Check if click is NOT on mainNav or mobileNav
  if (!mainNav.contains(event.target) && !mobileNav.contains(event.target)) {
    mainNav.classList.remove("active");
    document.body.classList.remove("no-scroll");

    if (mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      navIcon.classList.toggle("fa-bars");
      navIcon.classList.toggle("fa-xmark");
    }
  }
});
