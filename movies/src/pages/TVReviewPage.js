import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTVPage";
import TVReview from "../components/TVReview";

const TVReviewPage = (props) => {
  let location = useLocation();
  const { tv, review } = location.state;

  return (
    <PageTemplate tv={tv}>
      <TVReview review={review} />
    </PageTemplate>
  );
};

export default TVReviewPage;