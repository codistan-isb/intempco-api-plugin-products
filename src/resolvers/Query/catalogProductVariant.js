
export default async function catalogProductVariant(_, args, context, info) {
   
    let {
        variantId,
        shopId,
    } = args;

    const query = await context.queries.catalogProductVariant(context, {
        variantId,
        shopId,
    });
    // console.log("query ", query);
    return query;
}
