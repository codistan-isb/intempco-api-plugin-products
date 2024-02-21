import getConnectionTypeResolvers from "@reactioncommerce/api-utils/graphql/getConnectionTypeResolvers.js";
import ProductConfiguration from "./ProductConfiguration.js";
import Mutation from "./Mutation/index.js";
import Query from "./Query/index.js";
import Product from "./Product/index.js";
import ProductVariant from "./ProductVariant/index.js";
import savedProduct from "./savedProduct/index.js";
import ProductData from "./ProductData/index.js";
import CategoriesWiseProduct from "./CategoriesWiseProduct/index.js";
export default {
  ProductConfiguration,
  Mutation,
  Query,
  Product,
  ProductVariant,
  ...getConnectionTypeResolvers("Product"),
  savedProduct,
  ProductData,
  CategoriesWiseProduct
};
