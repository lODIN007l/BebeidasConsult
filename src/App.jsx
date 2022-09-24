import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
//
function App() {
  return (
    <CategoriasProvider>
      <header>
        <h1 className="py-5">Buscador de Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Formulario />
      </Container>
    </CategoriasProvider>
  );
}

export default App;
