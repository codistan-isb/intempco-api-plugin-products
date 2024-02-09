import { decodeProductOpaqueId } from "../xforms/id.js";

export default async function deleteSavedProduct(args, context) {
  let { userId, variantId } = args;
  let { collections } = context;
  let { SavedProduct } = collections;
  console.log("decodeProductOpaqueId", decodeProductOpaqueId(variantId));
  let deleteProduct = await SavedProduct.deleteOne({
    userId,
    variantId: decodeProductOpaqueId(variantId),
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
