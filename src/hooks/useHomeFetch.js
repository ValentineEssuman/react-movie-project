import { useEffect, useState, useRef } from "react";
import API from '../API';



const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0

};

const useHomeFetch = ()=> {
    const [state, setState ] = useState(initialState);
    const [loading, setLoading ] = useState(false);
    const [error, setError ] = useState(false);

    const fetchMoviez = async (page, searchTerm="") => {
        try{
            setError(false);
            setLoading(true);
            console.log("working?")
            const movies = await API.fetchMovies(searchTerm, page);
            //console.log(movies);
            setState(prev =>({
                ...movies, 
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
           
        }catch(error){
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMoviez(1)
    }, []);

    return { state, loading, error};

};

export default useHomeFetch;