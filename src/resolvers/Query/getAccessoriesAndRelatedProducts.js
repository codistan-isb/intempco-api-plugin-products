
export default async function getAccessoriesAndRelatedProducts(parent, args, context, info) {
    const query = await context.queries.getAccessoriesAndRelatedProducts(context);
    return query;
}
