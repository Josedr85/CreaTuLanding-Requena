import NavBarBs from "./components/NavBarBS";
import ListItemContainer from "./components/ListItemContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBarBs />

      <ListItemContainer mensaje="Bienvenido a MusicStore" />
    </>
  );
}

export default App;
