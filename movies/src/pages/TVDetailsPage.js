import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/TVDetails/";
import PageTemplate from "../components/templateTVPage";
import { getTvShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
//import useTV from "../hooks/useTV";

const TVPage = (props) => {
  const { id } = useParams();
  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTvShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TVDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV show details</p>
      )}
    </>
  );
};

export default TVPage;