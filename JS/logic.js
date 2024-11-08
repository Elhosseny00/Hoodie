let nav = document.querySelector("nav");
let btn = document.querySelector(".btn");
let links = [
  {
    linkName: "Home",
    href: "#home",
  },
  {
    linkName: "Shop",
    href: "#shop",
  },
  {
    linkName: "About",
    href: "#about",
  },
  {
    linkName: "Services",
    href: "#services",
  },
  {
    linkName: "Contact",
    href: "#contact",
  },
];
let unOrderList = document.createElement("ul");
links.forEach((link) => {
  let anchor = document.createElement("a");
  anchor.textContent = link.linkName;
  anchor.href = link.href;
  let li = document.createElement("li");
  li.appendChild(anchor);
  unOrderList.appendChild(li);
});
nav.appendChild(unOrderList);
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove("active");
    btn.classList.remove("active");
  }
});

let clickLinks = document.querySelectorAll("nav a");
for (let i = 0; i < clickLinks.length; i++) {
  clickLinks[i].addEventListener("click", () => {
    nav.classList.remove("active");
    btn.classList.remove("active");
  });
}
