import resolveShopFromShopId from "@reactioncommerce/api-utils/graphql/resolveShopFromShopId.js";
import { encodeProductOpaqueId } from "../../xforms/id.js";
import getVariants from "../../utils/getVariants.js";
import getVariantMedia from "../../utils/getVariantMedia.js";
import getTagId from "../../utils/getTagId.js";
export default {
  _id: (node) => encodeProductOpaqueId(node?._id),
  media: (node, args, context) => getVariantMedia(node, context),
  metafields: (node) => node.metafields || [],
  options: (node, args, context) => getVariants(context, node?._id, undefined, args),
  shop: resolveShopFromShopId,
  variantId:(node) => encodeProductOpaqueId(node?._id),
  productId:(node) => encodeProductOpaqueId(node?.ancestors[0]),
  tagId:(node, args, context) =>getTagId(node, context),
};
