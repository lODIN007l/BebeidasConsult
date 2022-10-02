import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const CategoriaContext = createContext();
const CategoriasProvider = ({ children }) => {
  const [categorias, setCategoria] = useState([]);
  const obtenerCategorias = async () => {
    try {
      console.log("consultando");
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const { data } = await await axios(url);
      setCategoria(data.drinks);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <CategoriaContext.Provider value={{ categorias }}>
      {children}
    </CategoriaContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriaContext;
