import { useEffect, useState } from "react";
import { getProducts } from "../mock/Mock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ListItemContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  //   useEffect(() => {
  //     getProducts().then((res) => {
  //       if (type) {
  //         setData(res.filter((prod) => prod.category === type));
  //       } else {
  //         setData(res);
  //       }
  //     });
  //   }, [type]);

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

  // BORRAR
  const subirData = () => {
    const collSubir = collection(db, "productos");
    getProducts.map((prod) => addDoc(collSubir, prod));
  };

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
          <button onClick={subirData}>SUBIR DATA</button>
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
