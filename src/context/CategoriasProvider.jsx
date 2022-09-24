import { createContext } from "react";
import { useState, useEffect } from "react";

const CategoriaContext = createContext();
const CategoriasProvider = ({ children }) => {
  return (
    <CategoriaContext.Provider value={{}}>{children}</CategoriaContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriaContext;
