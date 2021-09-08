import { useState, useEffect } from "react";

import API from '../API';
// const initialState = {
//     movie: [],
//     actors: [],
//     directors:[]
// };

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);

                console.log("loading", loading);
                console.log("error", error); 
                console.log("loading", loading);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                console.log("Movie details", credits.actors);

                console.log("movie", movie);
                console.log("credits", credits); 
                console.log("loading", loading);
                //c
            
                const directors = credits.crew.filter( person => person.job ==='Director');
                console.log("directors", directors);
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });
                setLoading(false);

            } catch (error) {
                console.log(error.message)
                setError(true);
            }
        };

        fetchData();
    }, [movieId]);

    return { state, loading, error}

}