import { notFound } from "next/navigation";

type ProductReviewDetailsProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ProductReviewDetails = ({ params }: ProductReviewDetailsProps) => {
  // Invoke not found page if review id is greater than 1000
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ProductReviewDetails;
