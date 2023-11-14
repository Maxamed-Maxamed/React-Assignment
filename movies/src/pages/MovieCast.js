// import React, { useState, useEffect } from 'react';
import { getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";

const MovieCast = (props) => {

  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(

    ["cast", { id: id }],

    getMovieCast
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

 console.log(data);

  return (
    <p> cast movie </p>

  )


}; 


    





export default MovieCast; 