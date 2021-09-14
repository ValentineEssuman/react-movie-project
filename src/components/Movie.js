import React from 'react';
import { useParams } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//components
import Grid from './Grid';
import Spinner  from './Spinner';
import BreadCrumb from '../components/BreadCrumb';

import Actor from './Actor';
import MovieInfo from '../components/MovieInfo';

//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

//images
import NoImage from '../images/noimage.jpg';
import InfoBar from './InfoBar';

const Movie = () => {

    const { movieId } = useParams();
    const  { state: movie, loading, error }  = useMovieFetch(movieId);
    console.log("movie", movie);

    if (loading) return <Spinner/>;
    if (error)  return <div>Something Went Wrong ..</div>
    return(
        <>
            <BreadCrumb movieTitle={ movie.original_title } />
            <MovieInfo themovie={movie} />
            <InfoBar  
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            
            />
            <Grid header ='Actor'>
                {movie.actors
                    .map(actor => (
                        <Actor
                            key={actor.credit_id}
                            name={actor.name}
                            character ={actor.character}
                            imageUrl = {
                                actor.profile_path ?
                                IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path 
                                : NoImage}
                        />
                        )
                    )
                }
            </Grid>
        </>
    )
};

export default Movie;