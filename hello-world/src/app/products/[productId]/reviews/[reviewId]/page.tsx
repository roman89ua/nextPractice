import React from "react";
import {Metadata} from "next";

type MetadataType = {productId: string; reviewId: string }
export const generateMetadata = ({params}: {params: MetadataType }): Metadata  => ({
  title: `Product ${params?.productId}, review: ${params?.reviewId}`,

  description: "Not required description change from review page"
})

const ReviewDetails = ({
  params,
}: {
  params: MetadataType;
}) => {
  const { productId, reviewId } = params;
  return (
    <h1>
      Review #{reviewId} of product #{productId}
    </h1>
  );
};

export default ReviewDetails;
