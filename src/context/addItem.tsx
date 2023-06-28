import React, { useState, ReactNode } from 'react';

interface MyContextType {
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  setSelectedCategory: (categoryId: string | null) => void;
  setSelectedSubcategory: (subcategoryId: string | null) => void;
}

const AddItemCont = React.createContext<MyContextType | null>(null);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleSetSelectedCategory = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
  };

  const handleSetSelectedSubcategory = (subcategoryId: string | null) => {
    setSelectedSubcategory(subcategoryId);
  };

  const contextValue: MyContextType = {
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory: handleSetSelectedCategory,
    setSelectedSubcategory: handleSetSelectedSubcategory,
  };

  return <AddItemCont.Provider value={contextValue}>{children}</AddItemCont.Provider>;
};

export default AddItemCont;
