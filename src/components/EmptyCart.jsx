import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h1>Tu carrito esta vacio</h1>
      <h3>Te invitamos a ver nuestra línea de productos</h3>
      <Link ClassName="btn btn-dark" to="/">
        Ir a Home
      </Link>
    </div>
  );
};

export default EmptyCart;
