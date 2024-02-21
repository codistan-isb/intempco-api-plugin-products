export default async function getCategoriesWiseProduct(context) {
  let { collections } = context;
  let { Tags } = collections;
  let pipeline = [
    {
      $match: { slug: /category/ },
    },
    {
      $lookup: {
        from: "Products",
        localField: "_id",
        foreignField: "hashtags",
        as: "products",
      },
    },
    {
      $match: { isVisible: true }, // Add a condition to check isVisible field
    },
    {
      $project: {
        _id: 1,
        tagName: "$name",
        products: {
          $map: {
            input: "$products",
            as: "product",
            in: {
              _id: "$$product._id",
              slug: "$$product.slug",
              sku: "$$product.sku",
              title: "$$product.title",
            },
          },
        },
      },
    },
  ];

  let result = await Tags.aggregate(pipeline).toArray();
  console.log("result is : - ", result);
  if (result.length > 0) {
    return result;
  } else {
    return null;
  }
  // return result.map(item => ({
  //   tagName: item.tagName,
  //   products: item.products
  // }));
  //  return  {
  //   tagName:result[0].tagName,
  //   products:result[0].products
  //  }
  // }
}
