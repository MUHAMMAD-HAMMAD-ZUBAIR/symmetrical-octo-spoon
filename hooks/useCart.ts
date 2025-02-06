import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, "id">) => {
    const newItem = {
      id: Math.random(), // Unique ID generate karega
      ...product,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const updateSize = (id: number, size: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, size } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return { cartItems, addToCart, updateQuantity, updateSize, removeItem };
};