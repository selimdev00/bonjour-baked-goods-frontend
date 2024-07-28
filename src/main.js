"use strict";

import products from "./data/products.json";

import Product from "./js/Product.js";

import Slider from "./js/Slider.js";

for (const product of products) {
  new Product(product);
}

Slider(document.querySelector(".products__slider"));
