import { useEffect, useState } from "react";
import { getProducts } from "../mock/Mock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ListItemContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getProducts().then((res) => {
      if (type) {
        setData(res.filter((prod) => prod.category === type));
      } else {
        setData(res);
      }
    });
  }, [type]);
  return (
    <div>
      <h1 className="text-center mt-5">
        {mensaje}{" "}
        {type && (
          <span style={{ color: "grey", textTransform: "capitalize" }}>
            {type}
          </span>
        )}
      </h1>

      <ItemList data={data} />
    </div>
  );
};
export default ListItemContainer;
