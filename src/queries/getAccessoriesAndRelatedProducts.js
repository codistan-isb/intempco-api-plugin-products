export default async function getAccessoriesAndRelatedProducts(context) {
  let { Products } = context.collections;
//   console.log("here it is");
  // Aggregate to get random product variants with non-empty ancestors
  let variants = await Products.aggregate([
    { $match: { ancestors: { $ne: [] }, isVisible: true } }, // Filter non-empty ancestors and isVisible true
    { $sample: { size: 5 } }, // Get random 5 records
  ]).toArray();
//   console.log("variants", variants);
  return variants;
}
