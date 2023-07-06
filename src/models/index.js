// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Product, Message, ProductCategories } = initSchema(schema);

export {
  Category,
  Product,
  Message,
  ProductCategories
};