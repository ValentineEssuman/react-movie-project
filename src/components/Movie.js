import React from 'react';
import { useParams } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//components
import Grid from './Grid';
import Spinner  from './Spinner';

//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

//images
import NoImage from '../images/noimage.jpg';

const Movie = () => {

    const { movieId } = useParams();
    const  { state: movie, loading, error }  = useMovieFetch(movieId);
    console.log("movie", movie);
    return(
        <>
            <div>Movie</div>;
        </>
    )
};

export default Movie;