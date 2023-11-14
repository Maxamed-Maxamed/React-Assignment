import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [myReviews, setMyReviews] = useState({})
    const [watchlist, setWatchlist] = useState([])

    const addToFavorites = (tv) => {
        let newFavorites = [];
        if (!favorites.includes(tv.id)) {
            newFavorites = [...favorites, tv.id];
        }
        else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const addReview = (tv, review) => {
        setMyReviews({ ...myReviews, [tv.id]: review })
    };
    //console.log(myReviews);

    // We will use this function in a later section
    const removeFromFavorites = (tv) => {
        setFavorites(favorites.filter(
            (mId) => mId !== tv.id
        ))
    };

    const addToWatchlist = (tv) => {
        let newEntry = [];
        if (!watchlist.includes(tv.id)) {
            newEntry = [...watchlist, tv.id];
        }
        else {
            newEntry = [...watchlist];
        }
        setWatchlist(newEntry)
        console.log(newEntry)
    };

    return (
        <TVContext.Provider
            value={{
                favorites,
                watchlist,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchlist
            }}
        >
            {props.children}
        </TVContext.Provider>
    );
};

export default TVContextProvider;