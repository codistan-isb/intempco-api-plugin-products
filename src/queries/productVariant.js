import {
    decodeProductOpaqueId,
    decodeShopOpaqueId,
} from "../xforms/id.js";
export default async function productVariant(context, input) {
    const { collections } = context;
    const { Products } = collections;
    let {
        variantId,
        shopId,
    } = input;
    let selector = {
        _id: decodeProductOpaqueId(variantId),
        shopId: decodeShopOpaqueId(shopId),
    };
    // Get the first N (limit) top-level products that match the query
    let countTotal = await Products.countDocuments(selector);
    let productFound = await Products.find(selector).toArray();
    return {
        totalCount: countTotal,
        varinatData: productFound[0]
    }
}
