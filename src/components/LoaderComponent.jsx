import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Spinner />
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default LoaderComponent;
