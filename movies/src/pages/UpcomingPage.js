// import React, { useEffect } from "react";
import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

// import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PlaylistAddIcon from "../components/cardIcons/playListAdd";
const UpcomingPage = (props) => {
  // const [upcomingMovies, setUpcomingMovies] = useState([]);
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  // useEffect(() => {
  //   console.log(data);
  // });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const upcomingMovies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />;
      }}
    />
  );
};

export default UpcomingPage;