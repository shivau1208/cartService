# CartService Hook with React

This React hook provides functionalities to manage cart operations such as adding, removing, and updating items in a shopping cart. It also calculates the total cart value and allows clearing the cart.

## Usage

```javascript
// Initialize cart from localStorage, or with an empty array if nothing is stored
const storedCart = localStorage.getItem("cartItems");
const initalValue = storedCart ? JSON.parse(storedCart) : [];
const { cartLength, cartItems, addToCart, removeFromCart, reduceFromCart, increaseToCart, cartTotal, clearCart } = useCartService(initalValue);

// Updates the localstorage on change of cartItems
useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);
```

## Hook Functions

- **addToCart**: Adds an item to the cart or increments the quantity if the item already exists.
- **removeFromCart**: Removes an item from the cart based on the item id.
- **increaseToCart**: Increases the quantity of an item in the cart.
- **reduceFromCart**: Reduces the quantity of an item in the cart. The quantity doesn't go below 0.
- **cartTotal**: Calculates the total cost of the items in the cart.
- **clearCart**: Clears all the items from the cart.





