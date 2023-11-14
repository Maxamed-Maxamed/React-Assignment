import React, { useContext } from "react";
import PageTemplate from "../components/templateTVbListPage";
import { TVContext } from "../contexts/TVContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromTVFavorites from "../components/cardIcons/removeFromTVFavorites";
import WriteTVReview from "../components/cardIcons/writeTVReview";

const FavoriteTVPage = () => {
    const { favorites: TVIds } = useContext(TVContext);

    // Create an array of queries and run in parallel.
    const favoriteTVQueries = useQueries(
        TVIds.map((TVId) => {
            return {
                queryKey: ["tv", { id: TVId }],
                queryFn: getTvShow,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = favoriteTVQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const tv = favoriteTVQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });

    // const toDo = () => true;

    return (
        <PageTemplate
            title="Favorite TV Shows"
            tv={tv}
            action={(tv) => {
                return (
                    <>
                        <RemoveFromTVFavorites tv={tv} />
                        <WriteTVReview tv={tv} />
                    </>
                );
            }}
        />
    );
};

export default FavoriteTVPage;