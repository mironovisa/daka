// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chat, Subcategory, User, Product, Category, FavoriteProduct, Message, SubcategoryCategory } = initSchema(schema);

export {
  Chat,
  Subcategory,
  User,
  Product,
  Category,
  FavoriteProduct,
  Message,
  SubcategoryCategory
};