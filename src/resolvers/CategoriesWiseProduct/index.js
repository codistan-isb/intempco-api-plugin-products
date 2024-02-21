import { encodeTagOpaqueId } from "../../xforms/id.js";
export default {
  _id: (node) => encodeTagOpaqueId(node?._id),
 
};
