import products from "./data/products.json";

import Product from "./js/Product.js";
import Slider from "./js/Slider.js";

// render products
for (const product of products) {
  new Product(product);
}

// slider logic
Slider(document.querySelector(".products__slider"));

// header logic
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
