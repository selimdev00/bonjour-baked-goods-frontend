"use strict";

import products from "./data/products.json";

import Product from "./Product";

for (const product of products) {
  new Product(product);
}
