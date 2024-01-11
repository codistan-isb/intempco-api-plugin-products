import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function addSavedProduct(context, input) {
  let { title, price, description, category, variantId } = input;
  let { collections,userId } = context;
  let { SavedProduct } = collections;
  const createdAt = new Date();
  // console.log("userId",userId);
  if (!userId ) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  const newSavedProduct = {
    _id: Random.id(),
    createdAt,
    title,
    price,
    userId,
    updatedAt: createdAt,
    description,
    category,
    variantId,
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
