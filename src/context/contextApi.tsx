import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

interface IAppContext {
  children: React.ReactNode;
}

export const Context = createContext<any>({});

export const AppContext: React.FC<IAppContext> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query: string) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchResults(contents);
      mobileMenu && setMobileMenu(false);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
