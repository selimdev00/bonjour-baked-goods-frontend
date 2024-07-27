import UserCart from "./UserCart.js";

const userCart = new UserCart();

export default class Product {
  constructor(product) {
    this.product = product;
    this.productNode = null;
    this.count = 1;
    this.addedToCart = false;
    this.init();
  }

  init() {
    this.render();
    this.setCounter();
    this.setCartHandler();
    this.setType();
  }

  render() {
    this.wrapper = document.querySelector(".products__slider");
    const html = `
            <div data-product="${this.product.id}" class="products__item">
              <div class="products__item__image">
                <img src="./images/product-image-1.png" alt="product" />
              </div>

              <div class="products__item__content">
                <h3 class="products__item__title font-garamond">
                  ${this.product.title}
                </h3>

                <p class="products__item__text">
                  ${this.product.description}
                </p>

                <div class="products__item__info">
                   <div class="products__item__info__section">
                    <div class="products__item__type">
                      <span>Pack of 6</span>

                      <svg
                        class="products__item__type__icon"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1.5L6 6.5L1 1.5"
                          stroke="#CF8C0B"
                          stroke-width="2"
                        />
                      </svg>
                      
                      <ul class="products__item__type__dropdown">
                        ${this.product.types
                          .map(
                            (type) =>
                              `<li class="products__item__type__dropdown__item">${type}</li>`,
                          )
                          .join("")}
                      </ul>
                    </div>

                    <div class="products__item__count">
                      <button class="products__item__count__button">
                        <svg
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1L0 1"
                            stroke="#CF8C0B"
                            stroke-width="2"
                          />
                        </svg>
                      </button>

                      <span>${this.count}</span>

                      <button class="products__item__count__button">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 0L5 10M10 5L0 5"
                            stroke="#CF8C0B"
                            stroke-width="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <p class="products__item__price">$<span>${this.product.price}</span></p>
                </div>

                <button class="products__item__cart__button">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 0.5L7.5 15.5M15 8H0"
                      stroke="#CF8C0B"
                      stroke-width="2"
                    />
                  </svg>

                  <span>Add to cart</span>
                </button>
              </div>
            </div>
    `;
    this.wrapper.insertAdjacentHTML("beforeend", html);
    this.productNode = this.wrapper.querySelector(
      `[data-product="${this.product.id}"]`,
    );
  }

  setCounter() {
    const counter = this.productNode.querySelector(
      ".products__item__count span",
    );
    counter.textContent = this.count;

    const addButton = this.productNode.querySelector(
      ".products__item__count button:last-of-type",
    );

    addButton.addEventListener("click", () => {
      this.count = this.count + 1;
      counter.textContent = this.count;
    });

    const subtractButton = this.productNode.querySelector(
      ".products__item__count button:first-of-type",
    );

    subtractButton.addEventListener("click", () => {
      if (this.count > 1) {
        this.count = this.count - 1;
        counter.textContent = this.count;
      }
    });
  }

  setCartHandler() {
    const cartButton = this.productNode.querySelector(
      ".products__item__cart__button",
    );
    cartButton.addEventListener("click", () => {
      if (this.addedToCart) {
        userCart.remove();
        this.addedToCart = false;
        cartButton.querySelector("span").textContent = "Add to cart";
        return;
      }

      this.addedToCart = true;
      userCart.add();
      cartButton.querySelector("span").textContent = "Remove from cart";
    });
  }

  setType() {
    const type = this.productNode.querySelector(".products__item__type");
    const dropdown = type.querySelector(".products__item__type__dropdown");
    dropdown.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    type.addEventListener("click", () => {
      type.classList.toggle("active");
    });

    for (const node of dropdown.querySelectorAll(
      ".products__item__type__dropdown__item",
    )) {
      node.addEventListener("click", () => {
        type.querySelector("span").textContent = node.textContent;
        type.classList.remove("active");
      });
    }
  }
}
