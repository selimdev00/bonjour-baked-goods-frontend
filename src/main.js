"use strict";

import products from "./data/products.json";

import Product from "./js/Product.js";

for (const product of products) {
  new Product(product);
}
