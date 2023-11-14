import React from "react";
import PageTemplate from '../components/templateTVListPage'
import { getUpcomingTvshow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToTVFavorites'
import { useQuery } from 'react-query';
import PlaylistAddIcon from '../components/cardIcons/addToTVWatchlist';


const UpcomingTVPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingTvshow)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const tv = data.results;

    const watchlist = tv.filter(m => m.watchlist)
    localStorage.setItem('watchlist', JSON.stringify(watchlist))

    return (
        <PageTemplate
            title='Upcoming TV Shows'
            tv={tv}
            action={(tv) => {
                return (
                    <>
                       
                        <AddToFavoritesIcon tv= {tv} /> 
                        <PlaylistAddIcon tv={tv} />
                    </>
                );

            }}
        />
    );
};
export default UpcomingTVPage;