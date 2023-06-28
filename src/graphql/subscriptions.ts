/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      category {
        id
        name
        src
        products {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      category {
        id
        name
        src
        products {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      category {
        id
        name
        src
        products {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      src
      products {
        items {
          id
          image
          images
          brand
          price
          rating
          numReview
          isFeatured
          name
          description
          countInStock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      src
      products {
        items {
          id
          image
          images
          brand
          price
          rating
          numReview
          isFeatured
          name
          description
          countInStock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      src
      products {
        items {
          id
          image
          images
          brand
          price
          rating
          numReview
          isFeatured
          name
          description
          countInStock
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateFavoriteProduct = /* GraphQL */ `
  subscription OnCreateFavoriteProduct(
    $filter: ModelSubscriptionFavoriteProductFilterInput
  ) {
    onCreateFavoriteProduct(filter: $filter) {
      id
      userSub
      productID
      product {
        id
        image
        images
        brand
        price
        rating
        numReview
        isFeatured
        name
        description
        countInStock
        category {
          id
          name
          src
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
      __typename
    }
  }
`;
export const onUpdateFavoriteProduct = /* GraphQL */ `
  subscription OnUpdateFavoriteProduct(
    $filter: ModelSubscriptionFavoriteProductFilterInput
  ) {
    onUpdateFavoriteProduct(filter: $filter) {
      id
      userSub
      productID
      product {
        id
        image
        images
        brand
        price
        rating
        numReview
        isFeatured
        name
        description
        countInStock
        category {
          id
          name
          src
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
      __typename
    }
  }
`;
export const onDeleteFavoriteProduct = /* GraphQL */ `
  subscription OnDeleteFavoriteProduct(
    $filter: ModelSubscriptionFavoriteProductFilterInput
  ) {
    onDeleteFavoriteProduct(filter: $filter) {
      id
      userSub
      productID
      product {
        id
        image
        images
        brand
        price
        rating
        numReview
        isFeatured
        name
        description
        countInStock
        category {
          id
          name
          src
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
