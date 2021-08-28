import React, { useState, useEffect } from 'react';

//config
import {  SEARCH_BASE_URL, POPULAR_BASE_URL, IMAGE_BASE_URL } from '../config';
//API
import API from '../API';

//components

//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//images
import NoImage from '../images/no_image.jpg'

const Home = () => {
    // const [state, setState ] = useState();
    // const [loading, setLoading ] = useState(false);
    // const [error, setError ] = useState(false);

    // const fetchMoviez = async (page, searchTerm="") => {
    //     try{
    //         setError(false);
    //         setLoading(true);
    //         console.log("working?")
    //         const movies = await API.fetchMovies(searchTerm, page);
    //         //console.log(movies);
    //         setState(prev =>({
    //             ...movies, 
    //             results:
    //                 page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
    //         }));
           
    //     }catch(error){
    //         setError(true);
    //     }
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     fetchMoviez(1)
    // }, [])
    const { state, loading, error} = useHomeFetch();

    console.log(state);

    return <div>Home Page</div>
}

export default Home;