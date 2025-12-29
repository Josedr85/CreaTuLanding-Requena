import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(); // esto esta asi porque CartContext salia con un subrayado rojo  y no lo podia sacar

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + qty };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const itemQuantity = (id) => {
    const itemInCart = cart.find((prod) => prod.id === id);

    if (itemInCart) {
      return itemInCart.quantity;
    } else {
      return 0;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clear,
        removeItem,
        addItem,
        itemQuantity,
        total,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
