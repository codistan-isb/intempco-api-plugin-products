import { encodeProductOpaqueId } from "../../xforms/id.js";


export default {
  _id: (node) => encodeProductOpaqueId(node._id),
  variantId: (node) => encodeProductOpaqueId(node.variantId)
};