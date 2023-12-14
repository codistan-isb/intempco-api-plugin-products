import ReactionError from "@reactioncommerce/reaction-error";

export default async function productVariant(_, args, context, info) {
    let { account } = context;
    if (account === null || account === undefined) {
        throw new ReactionError("access-denied", "Access Denied");
    }
    let {
        variantId,
        shopId,
    } = args;

    const query = await context.queries.productVariant(context, {
        variantId,
        shopId,
    });
    // console.log("query ", query);
    return query;
}
