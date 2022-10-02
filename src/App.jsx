import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
//
function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header>
          <h1 className="py-5">Buscador de Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
