export default async function getAllSavedProducts(context) {
  let { collections } = context;
  let { SavedProduct } = collections;
//   console.log(
//     "await SavedProduct.find({}).toArray()",
//     await SavedProduct.find({}).toArray()
//   );
  return await SavedProduct.find({}).toArray();
}
