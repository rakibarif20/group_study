import React, { useContext, useEffect, useState,useCallback } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const dataFetching = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerms}`);
      const data = await response.json();

      // console.log(data);
      const {drinks} = data;
      if(drinks){
        const newCocktails = drinks.map((item)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} =item;
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
        })
        setCocktails(newCocktails)
      }else{
        setCocktails([])
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  },[searchTerms]);
  useEffect(() => {
    dataFetching();
  }, [searchTerms, dataFetching]);
  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerms,
        setSearchTerms,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
