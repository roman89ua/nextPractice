import React from "react";
import Link from "next/link";
const reviews: {
  id: string;
  title: string;
}[] = [
  {
    id: "1",
    title: "Product review 1",
  },
  {
    id: "2",
    title: "Product review 2",
  },
  {
    id: "3",
    title: "Product review 3",
  },
];
const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <section>
      <h1>Product details page</h1>
      <p>Product #{params.productId}</p>
      <br />
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Link
          key={`${review.id}, ${review.title}`}
          href={{
            pathname: `${params.productId}/reviews/${review.id}`,
          }}
        >
          {review.title}
        </Link>
      ))}
    </section>
  );
};

export default ProductDetails;
