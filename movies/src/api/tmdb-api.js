import { excerpt } from "../util";

  export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };


 
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };



  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };




  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };



  /* The `getUpcoming` function is making a fetch request to the TMDB API to retrieve a
  list of upcoming movies. It uses the API key stored in the `REACT_APP_TMDB_KEY`
  environment variable to authenticate the request. The function then returns a promise
  that resolves to the list of upcoming movies. */
  export const  getUpcomingMovies  = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      // .then(res => res.json())
      // .then(json => json.results);


      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
      
  };



export const getMovieCast = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY} `
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};


  


export const getTvShow= (args) => {

    const [, idPart] = args.queryKey; 
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

    )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json(); 
       
    })

    .catch((error) => {
      throw error
   }
   );

}

export const getTvShows = (args)=> {

  return fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1`
  )
  .then((response)=> {
    if(!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error)=> {
    throw error
  })
}

export const getGenresTvshow = async () => {

  return fetch(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
   });
 }
 export const getTvShowImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
  });

};


export const getTvShowReviews = (id) => {

  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};
export const getTvShowCast = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
  });
}

export const getUpcomingTVshows = () => {

  return fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )

  .then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })

  .catch((error) => {
    throw error
  });
}


export const getTvShowSeasons = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/seasons?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
  });

}

export const getTvShowEpisodes = (args) => {

  const [, seasonIdPart] = args.queryKey;
  const { id, season_number } = seasonIdPart;

  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch
  ((error) => {
    throw error
  });
  };


