// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subcategory, User, Product, Category, FavoriteProduct, Message, SubcategoryCategory, ProductSubcategory } = initSchema(schema);

export {
  Subcategory,
  User,
  Product,
  Category,
  FavoriteProduct,
  Message,
  SubcategoryCategory,
  ProductSubcategory
};