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
    const [isLoadingMore, setIsLoadingMore] = useState(false);
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

    //initial and search
    useEffect(() => {
        setState(initialState);
        fetchMoviez(1, searchTerm)
    }, [searchTerm]);


    //loadMOre
    useEffect(() =>  {
        console.log("loading", loading);
        console.log("error", error);
        console.log("searchTerm", searchTerm);
        console.log("loading", loading);
        console.log("state page", state.page);
    

        if( !isLoadingMore) return;
        fetchMoviez(state.page + 1, searchTerm);
        console.log("done fetching");
        console.log("loading", loading);
        console.log("error", error);
        console.log("searchTerm", searchTerm);
        console.log("loading", loading);
        console.log("state page", state.page);
        setIsLoadingMore(false);
    },[isLoadingMore, searchTerm, state.page])

    return { state, loading, error, searchTerm, setSearchTerm, isLoadingMore, setIsLoadingMore};

};

export default useHomeFetch;