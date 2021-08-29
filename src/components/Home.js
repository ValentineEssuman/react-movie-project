import React, { useState, useEffect } from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//API
import API from '../API';

//components
import HeroImage from '../components/HeroImage/';
import Grid from '../components/Grid';
//hooks
import useHomeFetch  from '../hooks/useHomeFetch';

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
    
    const { state, loading, error } = useHomeFetch();
    
    console.log(state);

    return (
        <>
            {state.results[0] ? (
                <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title = {state.results[0].original_title}
                        text = {state.results[0].overview}
                />
            ) : null } 
            <Grid header={`Popular Movies`}>
                {state.results.map( movie =>(
                    <div key={movie.id}>{movie.title}</div>
                ))}
            </Grid>
        </>
    );
};

export default Home;