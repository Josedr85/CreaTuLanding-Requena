import NavBarBs from "./components/NavBarBs";
import ListItemContainer from "./components/ListItemContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBs />
        <Routes>
          <Route
            path="/"
            element={<ListItemContainer mensaje={"Bienvenido a MusicStore"} />}
          />
          <Route
            path="/category/:type"
            element={<ListItemContainer mensaje={"Categoría:"} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={CartContainer} />
          <Route path="/checkout" element={Checkout} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
