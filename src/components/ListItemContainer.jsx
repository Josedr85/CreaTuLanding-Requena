import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ListItemContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    const prodCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos");

    getDocs(prodCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

  return (
    <>
      {loading ? (
        <LoaderComponent
          text={
            type ? `Cargando Categoria ${type}...` : "Cargando Productos..."
          }
        />
      ) : (
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
      )}
    </>
  );
};
export default ListItemContainer;
