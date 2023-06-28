import React, { createContext, useState, ReactNode } from 'react';

interface TryContextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  userSub: string;
  setUserSub: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  subcategory: string;
  setSubcategory: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
}

interface TryContextProviderProps {
  children: ReactNode;
}

export const TryContext = createContext<TryContextProps>({
  value: '',
  setValue: () => {},
  userSub: '',
  setUserSub: () => {},
  category: '',
  setCategory: () => {},
  subcategory: '',
  setSubcategory: () => {},
  name: '',
  setName: () => {},
  description: '',
  setDescription: () => {},
  price: '',
  setPrice: () => {},
});

export const TryContextProvider: React.FC<TryContextProviderProps> = ({ children }) => {
  const [myValue, setMyValue] = useState<string>('');
  const [userSub, setUserSub] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [subcategory, setSubcategory] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const updateValue = (newValue: string) => {
    setMyValue(newValue);
  };

  const writeUserSub = (newValue: string) => {
    setUserSub(newValue);
  };

  const handleChooseCategory = (newValue: string) => {
    setCategory(newValue);
  };

  const handleChooseSubCategory = (newValue: string) => {
    setSubcategory(newValue);
  };

  return (
    <TryContext.Provider
      value={{
        value: myValue,
        setValue: updateValue,
        userSub,
        setUserSub: writeUserSub,
        category,
        setCategory: handleChooseCategory,
        subcategory,
        setSubcategory: handleChooseSubCategory,
        name,
        setName,
        description,
        setDescription,
        price,
        setPrice,
      }}
    >
      {children}
    </TryContext.Provider>
  );
};
