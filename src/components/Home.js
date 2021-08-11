import React, { useState, useEffect } from 'react';

//config
import {  SEARCH_BASE_URL, POPULAR_BASE_URL, IMAGE_BASE_URL } from '../config';
//API
import API from '../API';

//components

//hooks

//images
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const {state, setState } = useState(false);
    const {loading, setLoading } = useState(false);
    const {error, setError } = useState(false);

    const fetchMoviez = async (page, searchTerm="") => {
        try{
            setError(false);
            setLoading(true);
            console.log("working?")
            // const movies = await API.fetchMovies(searchTerm, page);
            // console.log(movies);

        }catch(error){
            //JSON.parse(error.message).then(setError(error.message));
            setError(true);
        }
    };

    useEffect(() => {
        fetchMoviez(1)
    }, [])

    return <div>Home Page</div>
}

export default Home;