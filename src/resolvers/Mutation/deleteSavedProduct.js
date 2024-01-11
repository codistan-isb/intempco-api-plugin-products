export default async function deleteSavedProduct(
    parent,
  args,
    context,
    info
  ) {
  
    return await context.mutations.deleteSavedProduct(args,context);
  }
  