interface Category {
    id: string;
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    subcategories: Subcategory[];
  }
  
  interface Subcategory {
    id: string;
    name: string;
  }
  
  const categoriesData: { categories: Category[] } = {
    categories: [
      {
        id: "50a8693a-f12c-40f2-b35e-99c30cbcc3b1",
        name: "Cars",
        url: "/cars",
        createdAt: "2023-06-26T22:24:35.954Z",
        updatedAt: "2023-06-26T22:24:35.954Z",
        subcategories: [
          {
            id: "daa3ccc4-2edc-4cbc-a986-e7deb2d3520e",
            name: "Sell"
          }
        ]
      },
      {
        id: "6355aa12-599e-4f01-ba09-47d4bde7db49",
        name: "Electronics",
        url: "/electronics",
        createdAt: "2023-06-26T22:24:50.136Z",
        updatedAt: "2023-06-26T22:24:50.136Z",
        subcategories: [
          {
            id: "d856d8e6-e1d1-46db-9d04-d4656669573e",
            name: "Phones"
          },
          {
            id: "f54cf213-890a-4a06-8751-4e7b539ac17f",
            name: "TV's"
          },
          {
            id: "9c09ec78-9777-4417-b310-c4ce1b3b6c45",
            name: "Computers"
          }
        ]
      }
    ]
  };
  
  export default categoriesData;
  