import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";
import { decodeProductOpaqueId, decodeShopOpaqueId } from "../xforms/id.js";
export default async function addSavedProduct(context, input) {
  let { title, price, description, category, productId, userId: userID, productData } = input;
  let { collections, userId = userID } = context;
  let { SavedProduct } = collections;
  const createdAt = new Date();
  // console.log("userId",userId);
  if (!userId) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  console.log("decodeProductOpaqueId", decodeProductOpaqueId(productId));
  const newSavedProduct = {
    _id: Random.id(),
    createdAt,
    title,
    price,
    userId,
    updatedAt: createdAt,
    description,
    category,
    productId: decodeProductOpaqueId(productId),
    productData
  };
  let addProduct = await SavedProduct.insertOne(newSavedProduct);
  // console.log("addProduct",addProduct?.ops[0]);
  if (addProduct) {
    return {
      message: "Data Updated Sucessfully!",
      status: true,
      savedProduct: addProduct?.ops[0],
    };
  } else {
    return {
      message: "Server Error!",
      status: false,
      savedProduct: null,
    };
  }
}
