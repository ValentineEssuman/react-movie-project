import { useEffect, useState, useRef } from "react";
import API from '../API';



const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0

};

const useHomeFetch = ()=> {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState ] = useState(initialState);
    const [loading, setLoading ] = useState(false);
    const [error, setError ] = useState(false);

    console.log(searchTerm);
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
        setState(initialState);
        fetchMoviez(1)
    }, [searchTerm]);

    return { state, loading, error, setSearchTerm};

};

export default useHomeFetch;