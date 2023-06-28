/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  image: string,
  images: Array< string >,
  brand: string,
  price: number,
  rating: number,
  numReview: number,
  isFeatured?: boolean | null,
  name: string,
  description: string,
  countInStock?: number | null,
  _version?: number | null,
  categoryProductsId?: string | null,
};

export type ModelProductConditionInput = {
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  rating?: ModelFloatInput | null,
  numReview?: ModelIntInput | null,
  isFeatured?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  countInStock?: ModelIntInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  categoryProductsId?: ModelIDInput | null,
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

export type ModelIntInput = {
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type Product = {
  __typename: "Product",
  id: string,
  image: string,
  images: Array< string >,
  brand: string,
  price: number,
  rating: number,
  numReview: number,
  isFeatured?: boolean | null,
  name: string,
  description: string,
  countInStock?: number | null,
  category?: Category | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  categoryProductsId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  src: string,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateProductInput = {
  id: string,
  image?: string | null,
  images?: Array< string > | null,
  brand?: string | null,
  price?: number | null,
  rating?: number | null,
  numReview?: number | null,
  isFeatured?: boolean | null,
  name?: string | null,
  description?: string | null,
  countInStock?: number | null,
  _version?: number | null,
  categoryProductsId?: string | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  src: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  src?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  src?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateFavoriteProductInput = {
  id?: string | null,
  userSub: string,
  productID: string,
  _version?: number | null,
  favoriteProductProductId?: string | null,
};

export type ModelFavoriteProductConditionInput = {
  userSub?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelFavoriteProductConditionInput | null > | null,
  or?: Array< ModelFavoriteProductConditionInput | null > | null,
  not?: ModelFavoriteProductConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  favoriteProductProductId?: ModelIDInput | null,
};

export type FavoriteProduct = {
  __typename: "FavoriteProduct",
  id: string,
  userSub: string,
  productID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  favoriteProductProductId?: string | null,
};

export type UpdateFavoriteProductInput = {
  id: string,
  userSub?: string | null,
  productID?: string | null,
  _version?: number | null,
  favoriteProductProductId?: string | null,
};

export type DeleteFavoriteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  image: string,
  productName: string,
  sellerName: string,
  situation: string,
  date: string,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  image?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  sellerName?: ModelStringInput | null,
  situation?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  image: string,
  productName: string,
  sellerName: string,
  situation: string,
  date: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageInput = {
  id: string,
  image?: string | null,
  productName?: string | null,
  sellerName?: string | null,
  situation?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  rating?: ModelFloatInput | null,
  numReview?: ModelIntInput | null,
  isFeatured?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  countInStock?: ModelIntInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  categoryProductsId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  src?: ModelStringInput | null,
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

export type ModelFavoriteProductFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelFavoriteProductFilterInput | null > | null,
  or?: Array< ModelFavoriteProductFilterInput | null > | null,
  not?: ModelFavoriteProductFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  favoriteProductProductId?: ModelIDInput | null,
};

export type ModelFavoriteProductConnection = {
  __typename: "ModelFavoriteProductConnection",
  items:  Array<FavoriteProduct | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  sellerName?: ModelStringInput | null,
  situation?: ModelStringInput | null,
  date?: ModelStringInput | null,
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

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  numReview?: ModelSubscriptionIntInput | null,
  isFeatured?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  countInStock?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
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

export type ModelSubscriptionIntInput = {
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  src?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFavoriteProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userSub?: ModelSubscriptionStringInput | null,
  productID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFavoriteProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionFavoriteProductFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  productName?: ModelSubscriptionStringInput | null,
  sellerName?: ModelSubscriptionStringInput | null,
  situation?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    image: string,
    images: Array< string >,
    brand: string,
    price: number,
    rating: number,
    numReview: number,
    isFeatured?: boolean | null,
    name: string,
    description: string,
    countInStock?: number | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryProductsId?: string | null,
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
    image: string,
    images: Array< string >,
    brand: string,
    price: number,
    rating: number,
    numReview: number,
    isFeatured?: boolean | null,
    name: string,
    description: string,
    countInStock?: number | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryProductsId?: string | null,
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
    image: string,
    images: Array< string >,
    brand: string,
    price: number,
    rating: number,
    numReview: number,
    isFeatured?: boolean | null,
    name: string,
    description: string,
    countInStock?: number | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryProductsId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    src: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
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
    name: string,
    src: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
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
    name: string,
    src: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
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

export type CreateFavoriteProductMutationVariables = {
  input: CreateFavoriteProductInput,
  condition?: ModelFavoriteProductConditionInput | null,
};

export type CreateFavoriteProductMutation = {
  createFavoriteProduct?:  {
    __typename: "FavoriteProduct",
    id: string,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    favoriteProductProductId?: string | null,
  } | null,
};

export type UpdateFavoriteProductMutationVariables = {
  input: UpdateFavoriteProductInput,
  condition?: ModelFavoriteProductConditionInput | null,
};

export type UpdateFavoriteProductMutation = {
  updateFavoriteProduct?:  {
    __typename: "FavoriteProduct",
    id: string,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    favoriteProductProductId?: string | null,
  } | null,
};

export type DeleteFavoriteProductMutationVariables = {
  input: DeleteFavoriteProductInput,
  condition?: ModelFavoriteProductConditionInput | null,
};

export type DeleteFavoriteProductMutation = {
  deleteFavoriteProduct?:  {
    __typename: "FavoriteProduct",
    id: string,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    favoriteProductProductId?: string | null,
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
    image: string,
    productName: string,
    sellerName: string,
    situation: string,
    date: string,
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
    image: string,
    productName: string,
    sellerName: string,
    situation: string,
    date: string,
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
    image: string,
    productName: string,
    sellerName: string,
    situation: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    image: string,
    images: Array< string >,
    brand: string,
    price: number,
    rating: number,
    numReview: number,
    isFeatured?: boolean | null,
    name: string,
    description: string,
    countInStock?: number | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryProductsId?: string | null,
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
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
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
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    src: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
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
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
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
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
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

export type GetFavoriteProductQueryVariables = {
  id: string,
};

export type GetFavoriteProductQuery = {
  getFavoriteProduct?:  {
    __typename: "FavoriteProduct",
    id: string,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    favoriteProductProductId?: string | null,
  } | null,
};

export type ListFavoriteProductsQueryVariables = {
  filter?: ModelFavoriteProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoriteProductsQuery = {
  listFavoriteProducts?:  {
    __typename: "ModelFavoriteProductConnection",
    items:  Array< {
      __typename: "FavoriteProduct",
      id: string,
      userSub: string,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      favoriteProductProductId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFavoriteProductsQueryVariables = {
  filter?: ModelFavoriteProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFavoriteProductsQuery = {
  syncFavoriteProducts?:  {
    __typename: "ModelFavoriteProductConnection",
    items:  Array< {
      __typename: "FavoriteProduct",
      id: string,
      userSub: string,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      favoriteProductProductId?: string | null,
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
    image: string,
    productName: string,
    sellerName: string,
    situation: string,
    date: string,
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
      image: string,
      productName: string,
      sellerName: string,
      situation: string,
      date: string,
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
      image: string,
      productName: string,
      sellerName: string,
      situation: string,
      date: string,
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

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    image: string,
    images: Array< string >,
    brand: string,
    price: number,
    rating: number,
    numReview: number,
    isFeatured?: boolean | null,
    name: string,
    description: string,
    countInStock?: number | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryProductsId?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    image: string,
    images: Array< string >,
    brand: string,
    price: number,
    rating: number,
    numReview: number,
    isFeatured?: boolean | null,
    name: string,
    description: string,
    countInStock?: number | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryProductsId?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    image: string,
    images: Array< string >,
    brand: string,
    price: number,
    rating: number,
    numReview: number,
    isFeatured?: boolean | null,
    name: string,
    description: string,
    countInStock?: number | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      src: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryProductsId?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    src: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
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
    name: string,
    src: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
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
    name: string,
    src: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        image: string,
        images: Array< string >,
        brand: string,
        price: number,
        rating: number,
        numReview: number,
        isFeatured?: boolean | null,
        name: string,
        description: string,
        countInStock?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryProductsId?: string | null,
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

export type OnCreateFavoriteProductSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteProductFilterInput | null,
};

export type OnCreateFavoriteProductSubscription = {
  onCreateFavoriteProduct?:  {
    __typename: "FavoriteProduct",
    id: string,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    favoriteProductProductId?: string | null,
  } | null,
};

export type OnUpdateFavoriteProductSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteProductFilterInput | null,
};

export type OnUpdateFavoriteProductSubscription = {
  onUpdateFavoriteProduct?:  {
    __typename: "FavoriteProduct",
    id: string,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    favoriteProductProductId?: string | null,
  } | null,
};

export type OnDeleteFavoriteProductSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteProductFilterInput | null,
};

export type OnDeleteFavoriteProductSubscription = {
  onDeleteFavoriteProduct?:  {
    __typename: "FavoriteProduct",
    id: string,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      image: string,
      images: Array< string >,
      brand: string,
      price: number,
      rating: number,
      numReview: number,
      isFeatured?: boolean | null,
      name: string,
      description: string,
      countInStock?: number | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryProductsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    favoriteProductProductId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    image: string,
    productName: string,
    sellerName: string,
    situation: string,
    date: string,
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
    image: string,
    productName: string,
    sellerName: string,
    situation: string,
    date: string,
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
    image: string,
    productName: string,
    sellerName: string,
    situation: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
