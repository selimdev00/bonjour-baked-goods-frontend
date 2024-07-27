export default class UserCart {
  constructor() {
    this.node = document.querySelector("[data-cart]");
    this.count = 0;

    this.init();
  }

  init() {
    this.node.textContent = this.count;
  }

  add() {
    this.count = this.count + 1;
    this.node.textContent = this.count;
  }

  remove() {
    if (this.count > 0) {
      this.count = this.count - 1;
      this.node.textContent = this.count;
    }
  }
}
