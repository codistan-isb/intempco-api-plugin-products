export default async function addSavedProduct(
  parent,
  { input },
  context,
  info
) {
  let newSavedProduct = await context.mutations.addSavedProduct(context, input);

  return newSavedProduct;
}
