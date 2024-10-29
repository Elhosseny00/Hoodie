let btn = document.querySelector(".btn");
let navLinks = document.querySelector("nav");
btn.addEventListener("click", () => {
  btn.classList.toggle("burger");
  navLinks.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !btn.contains(e.target)) {
    navLinks.classList.remove("active");
    btn.classList.remove("burger");
  }
});
