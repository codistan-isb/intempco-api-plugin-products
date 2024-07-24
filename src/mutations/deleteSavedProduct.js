import { decodeProductOpaqueId } from "../xforms/id.js";

export default async function deleteSavedProduct(args, context) {
  let { userId, productId } = args;
  let { collections } = context;
  let { SavedProduct } = collections;
  console.log("decodeProductOpaqueId", decodeProductOpaqueId(productId));
  let deleteProduct = await SavedProduct.deleteOne({
    userId,
    productId: decodeProductOpaqueId(productId),
  });
    console.log("deleProduct", deleteProduct.deletedCount);
  //   console.log("deleteProduct");
  if (deleteProduct?.deletedCount === 1) {
    return {
      message: "Required Product Deleted!",
      status: true,
    };
  } else {
    return {
      message: "Server Error!",
      status: false,
    };
  }
}
