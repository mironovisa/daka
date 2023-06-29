import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSubcategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subcategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categories?: (SubcategoryCategory | null)[] | null;
  readonly name?: string | null;
  readonly products?: (ProductSubcategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubcategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subcategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categories: AsyncCollection<SubcategoryCategory>;
  readonly name?: string | null;
  readonly products: AsyncCollection<ProductSubcategory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Subcategory = LazyLoading extends LazyLoadingDisabled ? EagerSubcategory : LazySubcategory

export declare const Subcategory: (new (init: ModelInit<Subcategory>) => Subcategory) & {
  copyOf(source: Subcategory, mutator: (draft: MutableModel<Subcategory>) => MutableModel<Subcategory> | void): Subcategory;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price: number;
  readonly isFeatured?: boolean | null;
  readonly name: string;
  readonly description: string;
  readonly category?: Category | null;
  readonly city?: string | null;
  readonly isPaid?: boolean | null;
  readonly userId?: string | null;
  readonly Subcategories?: (ProductSubcategory | null)[] | null;
  readonly images?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryProductsId?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price: number;
  readonly isFeatured?: boolean | null;
  readonly name: string;
  readonly description: string;
  readonly category: AsyncItem<Category | undefined>;
  readonly city?: string | null;
  readonly isPaid?: boolean | null;
  readonly userId?: string | null;
  readonly Subcategories: AsyncCollection<ProductSubcategory>;
  readonly images?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryProductsId?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly products?: (Product | null)[] | null;
  readonly subcategorys?: (SubcategoryCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly products: AsyncCollection<Product>;
  readonly subcategorys: AsyncCollection<SubcategoryCategory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerFavoriteProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly productID: string;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favoriteProductProductId?: string | null;
}

type LazyFavoriteProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly productID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favoriteProductProductId?: string | null;
}

export declare type FavoriteProduct = LazyLoading extends LazyLoadingDisabled ? EagerFavoriteProduct : LazyFavoriteProduct

export declare const FavoriteProduct: (new (init: ModelInit<FavoriteProduct>) => FavoriteProduct) & {
  copyOf(source: FavoriteProduct, mutator: (draft: MutableModel<FavoriteProduct>) => MutableModel<FavoriteProduct> | void): FavoriteProduct;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly productName: string;
  readonly sellerName: string;
  readonly situation: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly productName: string;
  readonly sellerName: string;
  readonly situation: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerSubcategoryCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubcategoryCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subcategoryId?: string | null;
  readonly categoryId?: string | null;
  readonly subcategory: Subcategory;
  readonly category: Category;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubcategoryCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubcategoryCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subcategoryId?: string | null;
  readonly categoryId?: string | null;
  readonly subcategory: AsyncItem<Subcategory>;
  readonly category: AsyncItem<Category>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SubcategoryCategory = LazyLoading extends LazyLoadingDisabled ? EagerSubcategoryCategory : LazySubcategoryCategory

export declare const SubcategoryCategory: (new (init: ModelInit<SubcategoryCategory>) => SubcategoryCategory) & {
  copyOf(source: SubcategoryCategory, mutator: (draft: MutableModel<SubcategoryCategory>) => MutableModel<SubcategoryCategory> | void): SubcategoryCategory;
}

type EagerProductSubcategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductSubcategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subcategoryId?: string | null;
  readonly productId?: string | null;
  readonly subcategory: Subcategory;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductSubcategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductSubcategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subcategoryId?: string | null;
  readonly productId?: string | null;
  readonly subcategory: AsyncItem<Subcategory>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductSubcategory = LazyLoading extends LazyLoadingDisabled ? EagerProductSubcategory : LazyProductSubcategory

export declare const ProductSubcategory: (new (init: ModelInit<ProductSubcategory>) => ProductSubcategory) & {
  copyOf(source: ProductSubcategory, mutator: (draft: MutableModel<ProductSubcategory>) => MutableModel<ProductSubcategory> | void): ProductSubcategory;
}