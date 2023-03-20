import { createContext, useState } from "react";

const FavouriteContext = createContext({});

export const FavouriteContextProvider = ({ children }) => {
  const [favouriteList, setFavouriteList] = useState([]);

  const removeFavourite = (id) => {
    const result = favouriteList.filter((product) => {
     if(product.id !== id){
      return product
     }
    });
    setFavouriteList(result)
  };

  return (
    <FavouriteContext.Provider
      value={{
        favouriteList,
        setFavouriteList,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
export default FavouriteContext;
