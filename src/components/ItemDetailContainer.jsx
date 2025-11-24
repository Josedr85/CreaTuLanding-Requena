import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProducts } from "../mock/Mock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getOneProducts(id).then((res) => setDetalle(res));
  }, [id]);

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
