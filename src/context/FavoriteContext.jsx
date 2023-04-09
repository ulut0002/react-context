import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

const FavoriteContext = createContext();

function FavoriteProvider(props) {
  const [favorites, setFavorites] = useLocalStorage("ulut0002-fav-users", []);
  return (
    <FavoriteContext.Provider
      value={[favorites, setFavorites]}
      {...props}
    ></FavoriteContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoriteContext);

  if (!context) throw new Error("Not inside the Provider");
  return context;
}

export { useFavorites, FavoriteProvider };
