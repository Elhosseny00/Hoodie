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

const products = [
  {
    productName: "Men pants",
    productPrice: "20",
    ProductImage: "./Images/pants-1.webp",
  },
  {
    productName: "Men Pants",
    productPrice: "25",
    ProductImage: "../Images/pants-2.webp",
  },
  {
    productName: "Men Shirt",
    productPrice: "15",
    ProductImage: "./images/Shirt-1.webp",
  },
  {
    productName: "Men Shirt",
    productPrice: "20.5",
    ProductImage: "./images/Shirt-2.webp",
  },
  {
    productName: "Men Shirt",
    productPrice: "30",
    ProductImage: "./images/Shirt-3.webp",
  },
  {
    productName: "Men Shose",
    productPrice: "40",
    ProductImage: "./images/Shose-1.webp",
  },
  {
    productName: "Men Shose",
    productPrice: "35",
    ProductImage: "./images/Shose-2.webp",
  },
  {
    productName: "Men Shose",
    productPrice: "35",
    ProductImage: "./images/Shose-3.webp",
  },
  {
    productName: "Men T-shirt",
    productPrice: "35",
    ProductImage: "./images/T-shirt-1.webp",
  },
  {
    productName: "Men T-shirt",
    productPrice: "30",
    ProductImage: "./images/T-shirt-2.webp",
  },
  {
    productName: "Men Watche",
    productPrice: "100",
    ProductImage: "./images/Watche-1.webp",
  },
  {
    productName: "Men Watche",
    productPrice: "90",
    ProductImage: "./images/Watche-2.webp",
  },
];
let cards = document.querySelector(".cards");

for (let i = 0; i < products.length; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  let topDiv = document.createElement("div");
  topDiv.classList.add("image-cover");
  let image = document.createElement("img");
  image.src = products[i].ProductImage;
  image.alt = products[i].productName;
  topDiv.appendChild(image);
  card.appendChild(topDiv);

  let mainInfo = document.createElement("div");
  mainInfo.classList.add("main-info");
  let subInfo = document.createElement("div");
  subInfo.classList.add("sub-info");
  let productName = document.createElement("h3");
  productName.innerHTML = products[i].productName;
  subInfo.appendChild(productName);
  let productPrice = document.createElement("h6");
  productPrice.innerHTML = `$${products[i].productPrice}`;
  subInfo.appendChild(productPrice);
  let btn = document.createElement("button");
  btn.innerHTML = "Shop Now";
  mainInfo.appendChild(subInfo);
  mainInfo.appendChild(btn);
  card.appendChild(mainInfo);
  cards.append(card);
}
