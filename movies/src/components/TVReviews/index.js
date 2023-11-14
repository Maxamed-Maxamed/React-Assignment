import React from "react";

const TVReviews = ({ review }) => {
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};
export default TVReviews