import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>No se encontraron resultados!</h1>
      <Link className="btn btn-warning" to="/">
        Volver a Home
      </Link>
    </div>
  );
};

export default Error;
