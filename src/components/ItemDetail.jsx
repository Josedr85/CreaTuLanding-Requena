import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${detalle.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const stockActualizado = detalle.stock - itemQuantity(detalle.id);
  return (
    <div
      style={{
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <h2>{detalle.name}</h2>
      <img src={detalle.image} alt={detalle.name} className="item-img" />
      <p className="item-txt">{detalle.description}</p>
      <p className="item-txt">Stock: {stockActualizado} unidades</p>
      <span className="item-price">${detalle.price}</span>
      {purchase ? (
        <Link className="btn btn-dark" to="/cart">
          Ir al carrito
        </Link>
      ) : (
        <ItemCount
          stock={stockActualizado}
          style={{ marginTop: "20px" }}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};

export default ItemDetail;
