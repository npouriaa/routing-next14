type ReviewsProps = {
  params: {
    productId: string;
  };
};

const Reviews = ({ params }: ReviewsProps) => {
  return (
    <div>
      <h1>Reviews for product {params.productId}</h1>
      <h2>review 1</h2>
      <h2>review 2</h2>
      <h2>review 3</h2>
    </div>
  );
};

export default Reviews;
