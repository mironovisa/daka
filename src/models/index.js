// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Product, User, Message, Chat, ProductCategories } = initSchema(schema);

export {
  Category,
  Product,
  User,
  Message,
  Chat,
  ProductCategories
};