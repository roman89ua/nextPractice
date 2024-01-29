import React from "react";

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const { productId, reviewId } = params;
  return (
    <h1>
      Review #{reviewId} of product #{productId}
    </h1>
  );
};

export default ReviewDetails;
