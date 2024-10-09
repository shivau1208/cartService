class CartService {
  constructor() {
    const beerCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.cart = beerCart;
  }

  addToCart(id) {
    let isExist = this.cart.findIndex(
      (cartItem) => cartItem.item.idDrink === id
    );
    if (isExist !== -1) {
      this.cart[isExist].quantity += 1;
    } else {
      let newBeer = data.find((cartItem) => cartItem.idDrink === id);
      let newItem = {
        quantity: 1,
        item: newBeer,
      };
      this.cart.push(newItem);
    }
    this.saveCart();
  }

  increaseToCart(id) {
    let isExist = this.cart.findIndex(
      (cartItem) => cartItem.item.idDrink === id
    );
    if (isExist !== -1) {
      this.cart[isExist].quantity += 1;
    }
    this.saveCart();
  }

  removeFromCart(id) {
    this.cart.filter((cartItem, index) => cartItem.item.idDrink !== id);
    this.saveCart();
  }

  reduceFromCart(id) {
    let isExist = this.cart.findIndex(
      (cartItem) => cartItem?.item?.idDrink === id
    );
    if (isExist !== -1) {
      this.cart[isExist].quantity === 0
        ? 0
        : (this.cart[isExist].quantity -= 1);
    }
    this.saveCart();
  }

  getItems() {
    return this.cart;
  }

  cartTotal() {
    return this.cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.item.price,
      0
    );
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

const cartService = new CartService();
export default cartService;
