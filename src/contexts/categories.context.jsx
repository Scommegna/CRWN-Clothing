import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

// Context that contains all products information
export const CategoriesProvider = function ({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Gets all products data from firestore db
  useEffect(() => {
    const getCategoriesMap = async function () {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
