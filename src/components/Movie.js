import React, {Component} from 'react';
import { useParams } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//components
import Grid from './Grid';
import Spinner  from './Spinner';
import BreadCrumb from '../components/BreadCrumb';

import Actor from './Actor';
import MovieInfo from '../components/MovieInfo';

//api
import API from '../API';

//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

//images
import NoImage from '../images/noimage.jpg';
import InfoBar from './InfoBar';

//Using Hooks for movie component
/////////////////////////////
// const Movie = () => {

//     const { movieId } = useParams();
//     const  { state: movie, loading, error }  = useMovieFetch(movieId);
//     console.log("movie", movie);

//     if (loading) return <Spinner/>;
//     if (error)  return <div>Something Went Wrong ..</div>
//     return(
//         <>
//             <BreadCrumb movieTitle={ movie.original_title } />
//             <MovieInfo themovie={movie} />
//             <InfoBar  
//                 time={movie.runtime}
//                 budget={movie.budget}
//                 revenue={movie.revenue}
            
//             />
//             <Grid header ='Actor'>
//                 {movie.actors
//                     .map(actor => (
//                         <Actor
//                             key={actor.credit_id}
//                             name={actor.name}
//                             character ={actor.character}
//                             imageUrl = {
//                                 actor.profile_path ?
//                                 IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path 
//                                 : NoImage}
//                         />
//                         )
//                     )
//                 }
//             </Grid>
//         </>
//     )
// };

// export default Movie;


///Using components
class Movie extends Component{

    state = {
        movie: {},
        loading: true,
        error: false,
        loading:  true
    }
    
    fetchData = async () => {
        const { movieId }  = this.props.params;

        try {
            this.setState({loading: true, error: false})


            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            console.log("Movie details", credits.actors);

            console.log("movie", movie);
            console.log("credits", credits); 

            //c
        
            const directors = credits.crew.filter( person => person.job ==='Director');
            console.log("directors", directors);
            this.setState ({
                movie:{
                    ...movie,
                    actors: credits.cast,
                    directors
                },
                loading: false

            });

        } catch (error) {
            console.log(error.message)
            this.setState({error:true, loading: false});
        }
    };
    
    componentDidMount(){
        this.fetchData();
    }

    render(){
        const { movie, loading, error } = this.state;
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

    }
};

const MovieWithParams = props => <Movie {...props} params={useParams()} />
export default MovieWithParams;