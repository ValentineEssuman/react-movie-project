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

                const movie = API.fetchMovie(movieId);
                const credits = API.fetchCredits(movieId);
                //c
                const directors = credits.crew.filter( person => person.job ==='Director');

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });
                setLoading(false);

            } catch (error) {
              setError(true);
            }
        };

        fetchData();
    }, [movieId]);

    return { state, loading, error}

}