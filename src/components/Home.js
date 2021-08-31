import React from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//API
import API from '../API';

//components
import HeroImage from '../components/HeroImage/';
import Grid from '../components/Grid';
import Thumb from '../components/Thumb';
import Spinner  from '../components/Spinner';
import SearchBar from '../components/SearchBar';

//hooks
import useHomeFetch  from '../hooks/useHomeFetch';

//images
import NoImage  from '../images/noimage.jpg';
console.log('NoImage',NoImage);


const Home = () => {

    // const [state, setState ] = useState();
    // const [loading, setLoading ] = useState(false);
    // const [error, setError ] = useState(false);
    
    const { state, loading, error, setSearchTerm } = useHomeFetch();
    

    console.log(state);

    return (
        <>
            {state.results[0] ? (
                <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title = {state.results[0].original_title} text = {state.results[0].overview}
                />
                ) : null } 

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={`Popular Movies`}>
                {state.results.map( movie =>(
                    <Thumb 
                    key={movie.id}
                    clicker
                    image = {movie.poster_path ?
                        IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : NoImage
                    }
                    movieId={movie.id}
                    />
                    // <div key={movie.id}>{movie.title}</div>
                    ))}
            </Grid>
            
            <Spinner/>
        </>
    );
};

export default Home;