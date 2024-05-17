import applyProductVariantFilters from "../utils/applyProductVariantFilters.js";

/**
 * @name products
 * @method
 * @memberof GraphQL/Products
 * @summary Query the Products collection for a list of products
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - Request input
 * @param {Boolean} [isArchived] - Filter by archived
 * @param {Boolean} [isVisible] - Filter by visibility
 * @param {String} [metafieldKey] - Filter by metafield key
 * @param {String} [metafieldValue] - Filter by metafield value
 * @param {Number} [priceMax] - Filter by price range maximum value
 * @param {Number} [priceMin] - Filter by price range minimum value
 * @param {String[]} [productIds] - List of product IDs to filter by
 * @param {String} [query] - Regex match query string
 * @param {String[]} shopIds - List of shop IDs to filter by
 * @param {String[]} [tagIds] - List of tag ids to filter by
 * @returns {Promise<Object>} Products object Promise
 */
export default async function catalogProductVariants(context, input) {
  const { collections } = context;
  const { Products } = collections;
  const productFilters = input;
  // console.log("input for filters",productFilters);
  // Check the permissions for all shops requested
  // await Promise.all(
  //   productFilters.shopIds.map(async (shopId) => {
  //     await context.validatePermissions("reaction:legacy:products", "read", {
  //       shopId,
  //     });
  //   })
  // );

  // Create the mongo selector from the filters
  const selector = applyProductVariantFilters(context, productFilters);
  console.log("selectors for variants", selector)
  // console.log("selector for query send ",selector);
  // Get the first N (limit) top-level products that match the query
  return Products.find(selector);
}
