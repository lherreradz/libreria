import { createContext, useContext, useState } from "react";

const AutorContext = createContext();

export const AutorProvider = ({ children }) => {
  const [autores, setAutores] = useState([]);

  const createAutor = (nombre, nacionalidad) =>
    setAutores([...autores, { nombre, nacionalidad }]);

  const updateAutor = (id, updatedAutor) =>
    setAutores([
      ...autores.map((autor) =>
        autor.id === id ? { ...autor, ...updatedAutor } : autor
      ),
    ]);

  const deleteAutor = (id) =>
    setAutores([...autores.filter((autor) => autor.id !== id)]);

  return (
    <AutorContext.Provider
      value={{
        autores,
        createAutor,
        updateAutor,
        deleteAutor,
      }}
    >
      {children}
    </AutorContext.Provider>
  );
};

export const useAutores = () => {
  return useContext(AutorContext);
};
