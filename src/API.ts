/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name?: string | null,
  products?: ModelProductCategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductCategoriesConnection = {
  __typename: "ModelProductCategoriesConnection",
  items:  Array<ProductCategories | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProductCategories = {
  __typename: "ProductCategories",
  id: string,
  categoryId: string,
  productId: string,
  category: Category,
  product: Product,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Product = {
  __typename: "Product",
  id: string,
  name?: string | null,
  description?: string | null,
  city?: string | null,
  price?: number | null,
  images?: Array< string | null > | null,
  userSub?: string | null,
  categories?: ModelProductCategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  city?: string | null,
  price?: number | null,
  images?: Array< string | null > | null,
  userSub?: string | null,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  city?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  images?: ModelStringInput | null,
  userSub?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  city?: string | null,
  price?: number | null,
  images?: Array< string | null > | null,
  userSub?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  owner: string,
  message: string,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  owner?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  owner: string,
  message: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageInput = {
  id: string,
  owner?: string | null,
  message?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductCategoriesInput = {
  id?: string | null,
  categoryId: string,
  productId: string,
  _version?: number | null,
};

export type ModelProductCategoriesConditionInput = {
  categoryId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductCategoriesConditionInput | null > | null,
  or?: Array< ModelProductCategoriesConditionInput | null > | null,
  not?: ModelProductCategoriesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductCategoriesInput = {
  id: string,
  categoryId?: string | null,
  productId?: string | null,
  _version?: number | null,
};

export type DeleteProductCategoriesInput = {
  id: string,
  _version?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  city?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  images?: ModelStringInput | null,
  userSub?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductCategoriesFilterInput = {
  id?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelProductCategoriesFilterInput | null > | null,
  or?: Array< ModelProductCategoriesFilterInput | null > | null,
  not?: ModelProductCategoriesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  images?: ModelSubscriptionStringInput | null,
  userSub?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  owner?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionProductCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductCategoriesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    description?: string | null,
    city?: string | null,
    price?: number | null,
    images?: Array< string | null > | null,
    userSub?: string | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    description?: string | null,
    city?: string | null,
    price?: number | null,
    images?: Array< string | null > | null,
    userSub?: string | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    description?: string | null,
    city?: string | null,
    price?: number | null,
    images?: Array< string | null > | null,
    userSub?: string | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductCategoriesMutationVariables = {
  input: CreateProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type CreateProductCategoriesMutation = {
  createProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductCategoriesMutationVariables = {
  input: UpdateProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type UpdateProductCategoriesMutation = {
  updateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductCategoriesMutationVariables = {
  input: DeleteProductCategoriesInput,
  condition?: ModelProductCategoriesConditionInput | null,
};

export type DeleteProductCategoriesMutation = {
  deleteProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    description?: string | null,
    city?: string | null,
    price?: number | null,
    images?: Array< string | null > | null,
    userSub?: string | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      owner: string,
      message: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      owner: string,
      message: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductCategoriesQueryVariables = {
  id: string,
};

export type GetProductCategoriesQuery = {
  getProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      categoryId: string,
      productId: string,
      category:  {
        __typename: "Category",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        description?: string | null,
        city?: string | null,
        price?: number | null,
        images?: Array< string | null > | null,
        userSub?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductCategoriesQueryVariables = {
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductCategoriesQuery = {
  syncProductCategories?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      categoryId: string,
      productId: string,
      category:  {
        __typename: "Category",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        description?: string | null,
        city?: string | null,
        price?: number | null,
        images?: Array< string | null > | null,
        userSub?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductCategoriesByCategoryIdQueryVariables = {
  categoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductCategoriesByCategoryIdQuery = {
  productCategoriesByCategoryId?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      categoryId: string,
      productId: string,
      category:  {
        __typename: "Category",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        description?: string | null,
        city?: string | null,
        price?: number | null,
        images?: Array< string | null > | null,
        userSub?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductCategoriesByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductCategoriesByProductIdQuery = {
  productCategoriesByProductId?:  {
    __typename: "ModelProductCategoriesConnection",
    items:  Array< {
      __typename: "ProductCategories",
      id: string,
      categoryId: string,
      productId: string,
      category:  {
        __typename: "Category",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        description?: string | null,
        city?: string | null,
        price?: number | null,
        images?: Array< string | null > | null,
        userSub?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    products?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    description?: string | null,
    city?: string | null,
    price?: number | null,
    images?: Array< string | null > | null,
    userSub?: string | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    description?: string | null,
    city?: string | null,
    price?: number | null,
    images?: Array< string | null > | null,
    userSub?: string | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    description?: string | null,
    city?: string | null,
    price?: number | null,
    images?: Array< string | null > | null,
    userSub?: string | null,
    categories?:  {
      __typename: "ModelProductCategoriesConnection",
      items:  Array< {
        __typename: "ProductCategories",
        id: string,
        categoryId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    owner: string,
    message: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnCreateProductCategoriesSubscription = {
  onCreateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnUpdateProductCategoriesSubscription = {
  onUpdateProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoriesFilterInput | null,
};

export type OnDeleteProductCategoriesSubscription = {
  onDeleteProductCategories?:  {
    __typename: "ProductCategories",
    id: string,
    categoryId: string,
    productId: string,
    category:  {
      __typename: "Category",
      id: string,
      name?: string | null,
      products?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      description?: string | null,
      city?: string | null,
      price?: number | null,
      images?: Array< string | null > | null,
      userSub?: string | null,
      categories?:  {
        __typename: "ModelProductCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
