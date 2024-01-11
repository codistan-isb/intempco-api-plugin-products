

export default async function getAllSavedProducts(parent, args, context, info) {
  

  return context.queries.getAllSavedProducts(context);
}
