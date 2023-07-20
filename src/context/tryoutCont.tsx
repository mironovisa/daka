import React, { createContext, useState, ReactNode } from "react";

interface CarData {
  selectedBrand: string;
  selectedModel: string;
  carYear: string;
  carOwners: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  cdPlayer: boolean;
  auxBuiltIn: boolean;
  mp3Player: boolean;
  radio: boolean;
  usbPort: boolean;
  tvPlayer: boolean;
  bluetooth: boolean;
  gpsNavigation: boolean;
  wheelMediaControls: boolean;
  powerSteering: string;
  climateControl: string;
  interiorType: string;
  powerWindows: string;
  powerDrive: string;
  autoPark: boolean;
  rainSensor: boolean;
  lightSensor: boolean;
  parkingSensors: boolean;
  blindSpotMonitor: boolean;
}

interface TryContextProps {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  userSub: string;
  setUserSub: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
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
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  handleImageUriAdd: (uri: string) => void;
  currentUserId: string;
  setCurrentUserId: React.Dispatch<React.SetStateAction<string>>;
  carData: CarData;
  setCarData: React.Dispatch<React.SetStateAction<CarData>>;
  selectedLocation: {
    lat: number;
    lng: number;
  } | null;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    } | null>
  >;
}

interface TryContextProviderProps {
  children: ReactNode;
}

export const TryContext = createContext<TryContextProps>({
  address: "",
  setAddress: () => {},
  value: "",
  setValue: () => {},
  userSub: "",
  setUserSub: () => {},
  categories: [],
  setCategories: () => {},
  category: "",
  setCategory: () => {},
  subcategory: "",
  setSubcategory: () => {},
  name: "",
  setName: () => {},
  description: "",
  setDescription: () => {},
  price: "",
  setPrice: () => {},
  imageUrls: [],
  setImageUrls: () => {},
  handleImageUriAdd: () => {},
  currentUserId: "",
  setCurrentUserId: () => {},
  carData: {
    selectedBrand: "",
    selectedModel: "",
    carYear: "",
    carOwners: "",
    transmission: "",
    fuelType: "",
    mileage: "",
    cdPlayer: false,
    auxBuiltIn: false,
    mp3Player: false,
    radio: false,
    usbPort: false,
    tvPlayer: false,
    bluetooth: false,
    gpsNavigation: false,
    wheelMediaControls: false,
    powerSteering: "",
    climateControl: "",
    interiorType: "",
    powerWindows: "",
    powerDrive: "",
    autoPark: false,
    rainSensor: false,
    lightSensor: false,
    parkingSensors: false,
    blindSpotMonitor: false,
  },
  setCarData: () => {},
  selectedLocation: null,
  setSelectedLocation: () => {},
});

export const TryContextProvider: React.FC<TryContextProviderProps> = ({
  children,
}) => {
  const [address, setAddress] = useState<string>("");
  const [myValue, setMyValue] = useState<string>("");
  const [userSub, setUserSub] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [carData, setCarData] = useState<CarData>({
    selectedBrand: "",
    selectedModel: "",
    carYear: "",
    carOwners: "",
    transmission: "",
    fuelType: "",
    mileage: "",
    cdPlayer: false,
    auxBuiltIn: false,
    mp3Player: false,
    radio: false,
    usbPort: false,
    tvPlayer: false,
    bluetooth: false,
    gpsNavigation: false,
    wheelMediaControls: false,
    powerSteering: "",
    climateControl: "",
    interiorType: "",
    powerWindows: "",
    powerDrive: "",
    autoPark: false,
    rainSensor: false,
    lightSensor: false,
    parkingSensors: false,
    blindSpotMonitor: false,
  });

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

  const handleImageUriAdd = (uri: string) => {
    setImageUrls((prevUrls) => [...prevUrls, uri]);
  };

  return (
    <TryContext.Provider
      value={{
        value: myValue,
        setValue: updateValue,
        userSub,
        setUserSub: writeUserSub,
        categories,
        setCategories,
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
        imageUrls,
        setImageUrls,
        handleImageUriAdd,
        currentUserId,
        setCurrentUserId,
        carData,
        setCarData,
        selectedLocation,
        setSelectedLocation,
        address,
        setAddress,
      }}
    >
      {children}
    </TryContext.Provider>
  );
};
