import { useState, useEffect } from "react";

import API from '../API';
import { isPersistedState } from "../helpers";
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

            

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                console.log("Movie details", credits.actors);

                console.log("movie", movie);
                console.log("credits", credits); 
    
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

        const sessionState = isPersistedState(movieId);
        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;

        }

        fetchData();
    }, [movieId]);


    useEffect(()=>{
        sessionStorage.setItem(movieId, JSON.stringify(state));
    },[movieId,state]);

    return { state, loading, error}

}