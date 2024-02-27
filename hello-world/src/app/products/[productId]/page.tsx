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

import { Metadata } from "next";

type ProductDetailsProps = { params: { productId: string } };

export const generateMetadata = async ({
  params,
}: ProductDetailsProps): Promise<Metadata> => {
  return await new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          // this absolute title for metadata will overwrite even absolute metadata title from parent layout or page
          // and any of current ways to set title (default, template, absolute) will overwrite event absolute title from main layout
          title: {
            default: `Product ${params.productId}`,
            template: `Product ${params.productId}`,
            // absolute: "Absolute product title",
          },
        }),
      1000,
    );
  });
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return (
    <section>
      <h1>Product details page</h1>
      <p>Product #{params.productId}</p>
      <br />
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <>
        <Link
          key={`${review.id}, ${review.title}`}
          href={{
            pathname: `${params.productId}/reviews/${review.id}`,
          }}
        >
          {review.title}
        </Link>
          <br />
        </>
      ))}
    </section>
  );
};

export default ProductDetails;
