import React, { useContext, createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (item) => {
    setFavourites([...favourites, item]);
  };

  const removeFavourites = (item) => {
    const newFavourites = favourites.filter((x) => x.name !== item.name);
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFav: addFavourites,
        removeFav: removeFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
