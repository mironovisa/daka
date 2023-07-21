interface Category {
  id: string;
  name: string;
  url: string;
  subcategories: Subcategory[];

}

interface Subcategory {
  id: string;
  name: string;
}

const categoriesData: { categories: Category[] } = {
  categories: [
    {
      id: "e1af2909-de94-42ec-a50b-bf60af077d29",
      name: "Transport",
      url: "/transport",
      subcategories: [
        { id: "d7bf1cac-405c-4bf6-a24d-c1c9cc5fce35", name: "Cars" },
        { id: "04ff6d1f-da12-430f-906b-85ca1c2428d2", name: "Motorcycles" },
        { id: "340c8b2e-a1e6-4581-9ffd-a8f242b6121b", name: "ATVs" },
        { id: "b2439df9-46f6-44bf-abd3-1f59ed86f713", name: "Quads" },
        { id: "eb703301-ed28-4744-8eb5-f523b5d3fb8c", name: "Scooters" },
        { id: "8c76442a-b4be-4e6e-922a-4b7697d122cd", name: "Trucks and Specialized Vehicles" },
        { id: "7f403486-7fe6-4554-a420-139a680a3fea", name: "Water Transport" },
        { id: "e37793a3-f0f7-4f75-a61b-c9312503441f", name: "Rowing Boats" },
        { id: "15e19121-b25f-4e44-946a-e60bd1c21de7", name: "Boats and Yachts" },
        { id: "355738be-1000-45e6-9266-02f438f36eee", name: "Motorboats and Outboard Motors" },
        { id: "d6ed46b1-f89e-4b3e-938f-043ea136cf13", name: "Parts and Accessories" }
      ]
    },
    {
      id: "7e4e8ca7-5b37-44d7-a650-18d2b998b604",
      name: "Real Estate",
      url: "/real-estate",
      subcategories: [
        { id: "ca96403d-7a0c-4cad-8c33-ade92858a46d", name: "Apartments" }, //square m2, rental period
        { id: "d6f00130-f9f4-46b4-ae8e-ee3f7ac7ba36", name: "Rooms" },
        { id: "0c7ffa04-1045-44bc-b0bb-430061fe7b54", name: "Private Houses" },
        { id: "452fb733-f07f-41da-87da-323f985daf0c", name: "Garages" },
        { id: "58bfe295-fba4-42fe-a455-f9262b5ec9ee", name: "Parking Spaces" },
        { id: "0d89b060-f858-44bd-9c4f-8ab165b2b362", name: "Commercial Real Estate" }
      ]
    },
    {
      id: "938abf0b-6a6e-48b6-b8de-c7bb5098993a",
      name: "Jobs",
      url: "/jobs",
      subcategories: [
        { id: "c0e98563-fb84-43ae-886a-f2f89ac995c3", name: "Job Vacancies" }, //requirements
        { id: "a12743a3-f3ee-4b2e-9b80-bae8b9410356", name: "Resumes" }
      ]
    },
    {
      id: "9ad87a46-e8fa-4c39-8411-a2f960ec15d6",
      name: "Services",
      url: "/services",
      subcategories: [
        { id: "28391dff-5070-4e80-920d-a3ec0226df40", name: "IT, Internet, Freelancing" },
        { id: "3059a709-de6b-4797-ac6f-13e849cfcaba", name: "Household Services" },
        { id: "2ba3c786-a88b-4299-94b7-f637b1fe5b2b", name: "Business Services" },
        { id: "ab480727-f923-4da5-84da-ce773466fe50", name: "Beauty and Health" },
        { id: "00900900-f793-411e-9908-d8f3d3038dc7", name: "Handyman Services" },
        { id: "f21c99d0-02b7-4639-be28-739869d4d513", name: "Babysitters, Caregivers" }
      ]
    },
    {
      id: "1e189935-c06b-44d1-be91-905a8b774768",
      name: "Personal Items",
      url: "/personal-items",
      subcategories: [
        { id: "1931a50f-df2f-4557-ad5a-d5d1412060b4", name: "Men's Clothing" },
        { id: "71d3a05a-72ca-4931-89c0-81052afc21c0", name: "Women's Clothing" },
        { id: "23de1e3e-bb91-43fd-9866-14fd3456be61", name: "Men's Shoes" },
        { id: "f05334fa-b951-4e9b-bd05-bc1b937aa142", name: "Women's Shoes" },
        { id: "f7b8bd08-db07-41e1-ace0-8babd99b2e29", name: "Bags, Backpacks, and Suitcases" },
        { id: "04448061-19dd-4fc0-bcbb-a13668f7d5a6", name: "Accessories" },
        { id: "dbda0177-9980-4cad-b8b1-85944a1866ab", name: "Children's Clothing and Shoes" },
        { id: "6c7e2764-5784-4d3c-80df-11a99f3dddd7", name: "Children's Goods and Toys" },
        { id: "61bf862d-a25c-493a-bb7b-8b3a674013b9", name: "Watches and Jewelry" },
        { id: "7ec84ab6-0715-46d6-b1fd-062db14fc72b", name: "Beauty and Health" }
      ]
    },
    {
      id: "007dd41d-7c2a-4816-8b80-063ccd578fdb",
      name: "Pets",
      url: "/pets",
      subcategories: [
        { id: "3ee97bdc-5a30-4324-b4b8-52089863dd7f", name: "Dogs" },
        { id: "4de2af5b-f093-4a36-aebd-9487c6639a35", name: "Cats" },
        { id: "8ec71d3a-20e5-4f1b-8b8a-9ec9703d7f2c", name: "Birds" },
        { id: "ffdfc6f8-b022-4549-a836-1c2dc95b1481", name: "Aquarium" },
        { id: "1ab17b52-28dc-4761-91fa-3d893fcd88a4", name: "Pet Supplies" }
      ]
    },
    {
      id: "db2cdcbc-7e9e-4c0c-95fe-3f0231a98c6e",
      name: "Televisions",
      url: "/televisions",
      subcategories: [
        { id: "dbbda07d-1f8a-4e20-b1b6-dd313ca4b9d4", name: "TVs" },
        { id: "daf7c3b3-ee59-446e-9e52-29f4f38e4187", name: "TV Audio Systems" },
        { id: "40025241-1465-4ac7-a1e7-e8012b95d435", name: "Video, DVD, and Blu-ray Players" },
        { id: "1109b98f-f514-4e40-ab6d-5778570e2802", name: "Cables" },
        { id: "8573e8da-1f74-4d9e-9518-b00adb5439ee", name: "Other" }
      ]
    },
    {
      id: "29bbdefd-8253-4173-a65f-5bbf439a5bbb",
      name: "Computers",
      url: "/computers",
      subcategories: [
        { id: "bb915c88-7827-4391-8b7f-08618edeb6b5", name: "Desktop Computers" },
        { id: "4b3aeda9-4d6c-4458-adfd-77d718b3e495", name: "Laptops" },
        { id: "942246c4-e7a4-4e66-b0cd-ca177d562213", name: "Tablets" },
        { id: "8d97f6da-7b0e-4837-96e5-096147f81c5c", name: "Components" },
        { id: "2cf72201-16e4-4895-bb68-4b5a86b82fc3", name: "Monitors" },
        { id: "6538e77d-9bca-4292-8c77-03ed5ec6e69e", name: "Networking Equipment" },
        { id: "d42d5e85-8134-42da-8ace-02ae61f3f0dc", name: "Keyboards and Mice" },
        { id: "5215b681-4440-4de3-a45c-429c07fda39e", name: "Accessories" },
        { id: "0e6b95c9-ef94-4326-86b5-7629b168ded4", name: "Joysticks and Steering Wheels" },
        { id: "b93bf529-abae-4030-958c-4d1eebd755a4", name: "Speakers" },
        { id: "e070b20a-988f-4755-a5aa-915d31990828", name: "Memory Cards and Hard Drives" },
        { id: "0ddfb561-0e7e-46d9-9ce4-658b14e6959d", name: "Webcams" },
        { id: "6afce31c-ad99-44fe-9171-c56a5e2d6b4c", name: "Other" }
      ]
    },
    {
      id: "0f20a276-3406-4a38-9dbd-2ef0e21d56a4",
      name: "Gaming Consoles and Games",
      url: "/gaming",
      subcategories: [
        { id: "17dd5e8d-abe9-4402-932d-c64fc9cc3e29", name: "Gaming Consoles" },
        { id: "b7fc55ed-d704-45a5-bbbb-e58e5be0dd4f", name: "Games" },
        { id: "4d036980-da40-4ece-9c76-52747b07ef36", name: "Accessories" },
        { id: "60993dda-932a-454d-9c06-ce7222536788", name: "Other" }
      ]
    },
    {
      id: "44daa2b5-f947-4c8a-ad76-fc5f22b4f7d2",
      name: "Photography Equipment",
      url: "/photography",
      subcategories: [
        { id: "997107d3-a231-4196-a0ea-139d5c657154", name: "Accessories" },
        { id: "f24bb50e-3b62-412d-8857-1cf7e8ca9091", name: "Lenses" },
        { id: "44adca7a-a3f3-4d1b-b087-6739df245ff3", name: "DSLR Cameras" },
        { id: "6021d0dd-ab5e-4037-90a9-ca893fb69894", name: "Film Cameras" },
        { id: "01f134f9-5714-4235-9b3d-bf0b0d244f28", name: "Compact Cameras" },
        { id: "52e7f780-d48b-4d67-8e9a-b25fa54bd113", name: "Binoculars and Telescopes" },
        { id: "ddf0a4a8-21ab-4ec4-b781-08d8f075f88d", name: "Other" }
      ]
    },
    {
      id: "7629c805-f839-455d-89f8-1dbdd8443255",
      name: "E-Readers",
      url: "/e-readers",
      subcategories: [
        { id: "31e3e997-5409-40d8-8711-17f4737c7d2d", name: "Accessories" },
        { id: "d90040ad-5142-424b-bffa-95f17c30551a", name: "Electronic Readers" }
      ]
    },
    {
      id: "87238fd5-280b-49cb-bf04-2f2bcc6de338",
      name: "Office Equipment and Supplies",
      url: "/office-equipment",
      subcategories: [
        { id: "cae24e39-0c01-42d1-956d-84752f063d7f", name: "Printers" },
        { id: "9a5b16ac-7aa2-46fe-b89a-85289e5d0889", name: "Scanners" },
        { id: "a0813bbd-d2ef-414e-899c-8a7c71dfb5b3", name: "Multifunction Devices" },
        { id: "43f459b6-d71d-4b3b-b0bf-018c162d56d5", name: "Paper Shredders" },
        { id: "5efc2ac9-0c67-4191-9624-eb8f59cf5556", name: "Consumables" },
        { id: "4d9be715-b395-4b75-87a0-3f624ba4048c", name: "Other" }
      ]
    }
  ]
};

export default categoriesData;