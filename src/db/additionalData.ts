interface AdditionalData {
    subcategories: { [key: string]: AdditionalSubcategory };
  }
  
  interface AdditionalSubcategory {
    fields: AdditionalField[];
  }
  
  interface AdditionalField {
    name: string;
    type: string;
    options?: string[];
    dependsOn?: string;
  }
  
  const carBrands = ["Audi", "Mercedes", "BMW", "Toyota"];
  const carModels = {
    Audi: ["A1", "A3", "A4", "A6"],
    Mercedes: ["C-Class", "E-Class", "S-Class"],
    BMW: ["3 Series", "5 Series", "7 Series"],
    Toyota: ["Camry", "Corolla", "RAV4"],
  };
  
  const additionalData: AdditionalData = {
    subcategories: {
      "daa3ccc4-2edc-4cbc-a986-e7deb2d3520e": {
        fields: [
          { name: "Brand", type: "select", options: carBrands },
          { name: "Car Year", type: "number" },
          { name: "Mileage", type: "number" },
          { name: "Engine Type", type: "text" },
          { name: "Engine Litres", type: "number" },
          { name: "Car Model", type: "select", dependsOn: "Brand" },
        ],
      },
      "d856d8e6-e1d1-46db-9d04-d4656669573e": {
        fields: [
          { name: "Brand", type: "select", options: carBrands },
          { name: "Memory", type: "number" },
          { name: "Other Field", type: "text" },
        ],
      },
    },
  };
  
  export { additionalData, carBrands, carModels };
  