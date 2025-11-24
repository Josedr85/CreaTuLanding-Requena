import React from "react";
import ItemCount from "./ItemCount";
import { MdRadar } from "react-icons/md";

const ItemDetail = ({ detalle }) => {
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
      <p className="item-txt">Stock: {detalle.stock} unidades</p>
      <span className="item-price">${detalle.price}</span>
      <ItemCount stock={detalle.stock} style={{ marginTop: "20px" }} />
    </div>
  );
};

export default ItemDetail;
