import ReactionError from "@reactioncommerce/reaction-error";

export default async function getSaveProductByUserId(args, context) {
  let { collections } = context;
  let { SavedProduct } = collections;
  console.log("args", args);
  let { userId } = args;
  if (!userId ) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  let productFound = await SavedProduct.find({ userId }).toArray();
  let totalCount = await SavedProduct.countDocuments({ userId });
  return {
    totalCount: totalCount,
    savedProduct: productFound,
  };
}
