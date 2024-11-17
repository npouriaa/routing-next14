import React from "react";

type ProductDetailsType = {
  params: {
    productId: string;
  };
};

const ProductDetails = ({ params }: ProductDetailsType) => {
  return <div>Deatils about product {params.productId}</div>;
};

export default ProductDetails;
