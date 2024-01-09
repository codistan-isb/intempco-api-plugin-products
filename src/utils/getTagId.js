import { encodeTagOpaqueId } from "../xforms/id.js";

export default async function getTagId(node, context) {
  let { collections } = context;
  let { Products } = collections;
  let getTagIdResp = await Products.findOne(
    { _id: node?.ancestors[0] },
    { projection: { hashtags: 1 } }
  );
  return encodeTagOpaqueId(getTagIdResp?.hashtags[0]);
}
