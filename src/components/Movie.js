import React from 'react';
import { useParams } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//components
import Grid from './Grid';
import Spinner  from './Spinner';
import BreadCrumb from '../components/BreadCrumb';

//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

//images
import NoImage from '../images/noimage.jpg';

const Movie = () => {

    const { movieId } = useParams();
    const  { state: movie, loading, error }  = useMovieFetch(movieId);
    console.log("movie", movie);

    if (loading) return <Spinner/>;
    if (error)  return <div>Something Went Wrong ..</div>
    return(
        <>
            <BreadCrumb movieTitle={ movie.original_title } />
        </>
    )
};

export default Movie;