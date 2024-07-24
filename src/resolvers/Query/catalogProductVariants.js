import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import wasFieldRequested from "@reactioncommerce/api-utils/graphql/wasFieldRequested.js";
import {
  decodeProductOpaqueId,
  decodeShopOpaqueId,
  decodeTagOpaqueId,
} from "../../xforms/id.js";
import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name Query/products
 * @method
 * @memberof Products/Query
 * @summary Query for a list of products
 * @param {Object} _ - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.shopId - id of user to query
 * @param {Object} context - an object containing the per-request state
 * @param {Object} info Info about the GraphQL request
 * @returns {Promise<Object>} Products
 */
export default async function catalogProductVariants(_, args, context, info) {
  const {
    createdAt,
    updatedAt,
    productIds: opaqueProductIds,
    shopIds: opaqueShopIds,
    tagIds: opaqueTagIds,
    query: queryString,
    isArchived,
    isVisible,
    isExactMatch,
    metafieldKey,
    metafieldValue,
    priceMin,
    priceMax,
    inStock,
    partNumber,
    weightage,
    ...connectionArgs
  } = args;
  const shopIds = opaqueShopIds.map(decodeShopOpaqueId);
  const productIds =
    opaqueProductIds && opaqueProductIds.map(decodeProductOpaqueId);
  const tagIds = opaqueTagIds && opaqueTagIds.map(decodeTagOpaqueId);
  // console.log("Product Variant Query ", productIds);

  if (productIds.length !== 1 || shopIds.length !== 1) {
    throw new ReactionError(
      "invalid-param",
      "Provide only one Product Id and Shop Id"
    );
  }

  const query = await context.queries.catalogProductVariants(context, {
    createdAt,
    updatedAt,
    productIds,
    shopIds,
    tagIds,
    query: queryString,
    isArchived,
    isVisible,
    isExactMatch,
    metafieldKey,
    metafieldValue,
    priceMin,
    priceMax,
    inStock,
    partNumber,
    weightage,
  });

  return getPaginatedResponse(query, connectionArgs, {
    includeHasNextPage: wasFieldRequested("pageInfo.hasNextPage", info),
    includeHasPreviousPage: wasFieldRequested("pageInfo.hasPreviousPage", info),
    includeTotalCount: wasFieldRequested("totalCount", info),
  });
}
