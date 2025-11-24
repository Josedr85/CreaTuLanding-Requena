import { useEffect, useState } from "react";
import { getProducts } from "../mock/Mock";
import ItemList from "./ItemList";

const ListItemContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1 className="text-center mt-5">{mensaje}</h1>

      <ItemList data={data} />
    </div>
  );
};
export default ListItemContainer;
