export default async function deleteSavedProduct(args, context) {
  let { userId, variantId } = args;
  let { collections } = context;
  let { SavedProduct } = collections;
  let deleteProduct = await SavedProduct.deleteOne({ userId, variantId });
//   console.log("deleProduct", deleteProduct.deletedCount);
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
