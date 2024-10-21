import React, { useState } from 'react';
export default function useCartService(itemsToCart) {
  const [cartItems, setCartItems] = useState(itemsToCart || []);
  const cartLength = cartItems?.length;
  const addToCart = async (item) => {
    let isExist = cartItems.findIndex((cartItem) => cartItem.item.idDrink === item.idDrink);
    if (isExist !== -1) {
      setCartItems((prevCartItems) => prevCartItems.map((cartItem, index) => (index === isExist ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
    } else {
      let newItem = {
        quantity: 1,
        item: item,
      };
      setCartItems(() => [...cartItems, newItem]);
    }
  };
  const removeFromCart = async (id) => {
    let filteredItems = cartItems.filter((cartItem, index) => cartItem.item.idDrink !== id);
    setCartItems(filteredItems);
  };
  const increaseToCart = async (id) => {
    setCartItems((prevCartItems) => prevCartItems.map((cartItem) => (cartItem.item.idDrink === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
  };
  const reduceFromCart = async (id) => {
    setCartItems((prevCartItems) => prevCartItems.map((cartItem) => (cartItem.item.idDrink === id ? { ...cartItem, quantity: cartItem.quantity === 0 ? 0 : cartItem.quantity - 1 } : cartItem)));
  };
  const cartTotal = () => {
    let total = cartItems.reduce((acc, curr) => acc + curr.quantity * curr.item.price, 0);
    return total;
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return {cartLength,cartItems,setCartItems,addToCart,removeFromCart,reduceFromCart,increaseToCart,cartTotal,clearCart};
}