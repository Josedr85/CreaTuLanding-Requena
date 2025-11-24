import NavBarBs from "./components/NavBarBS";
import ListItemContainer from "./components/ListItemContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <NavBarBs />
      <Routes>
        <Route
          path="/"
          element={<ListItemContainer mensaje={"Bienvenido a MusicStore"} />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
