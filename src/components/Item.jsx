import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <Card
      style={{
        width: "18rem",
        borderRadius: "10px",
        paddingTop: "20px",
        backgroundColor: "rgb(209, 216, 218)",
      }}
    >
      <Card.Img variant="top" src={prod.image} />
      <Card.Body
        style={{
          backgroundColor: "rgb(162, 167, 168)",

          borderRadius: "10px",
          marginTop: "8px",
        }}
      >
        <Card.Title style={{ fontWeight: "bold" }}>{prod.name}</Card.Title>
        <Card.Text>${prod.price}</Card.Text>
        <Link className="btn btn-success" to={"/item/" + prod.id}>
          Ver Más
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
