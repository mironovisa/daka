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
        id: "b6653497-053e-4c69-84e1-8f84636ea267",
        name: "Cars",
        url: "/cars",
        createdAt: "2023-06-26T22:24:35.954Z",
        updatedAt: "2023-06-26T22:24:35.954Z",
        subcategories: [
          {
            id: "80f4ee95-3fa1-4e83-8836-8c8dda0fe293",
            name: "Trucks"
          }
        ]
      },
    ]
  };
  
  export default categoriesData;
