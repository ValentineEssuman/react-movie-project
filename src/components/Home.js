import React, { Component } from 'react';

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
import Button from '../components/Button';

//hooks
import useHomeFetch  from '../hooks/useHomeFetch';

//images
import NoImage  from '../images/noimage.jpg';
console.log('NoImage',NoImage);


// const Home = () => {

//     const { state, loading, error, searchTerm, setSearchTerm, isLoadingMore, setIsLoadingMore } = useHomeFetch();
    
//     console.log(state);
//     if (error) return <div>Something Went Wrong</div>;
    
   
//     return (
//         <>
//             {!searchTerm && state.results[0] ? (
//                 <HeroImage 
//                         image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
//                         title = {state.results[0].original_title} text = {state.results[0].overview}
//                 />
//                 ) : null } 

//             <SearchBar setSearchTerm={setSearchTerm} />

//             <Grid header={searchTerm ? `Search Result`:`Popular Movies`}>
//                 {state.results.map( movie =>(
//                     <Thumb 
//                         key={movie.id}
//                         clicker
//                         image = {movie.poster_path ?
//                             IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
//                             : NoImage
//                     }
//                     movieId={movie.id}
//                     />
//                     // <div key={movie.id}>{movie.title}</div>
//                     ))}
//             </Grid>
            
//             {loading ? <Spinner/>: null}
//             { state.page < state.total_pages && !loading && (
//                 <Button text='Load More' callback={() => setIsLoadingMore(true)} />
//             )}

//         </>
//     );
// };
// export default Home;


const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0

};

class Home extends Component {

    state = { 
        movies: initialState,
        loading: false, 
        error: false, 
        searchTerm: '', 
        isLoadingMore: false
    }

    
    
    fetchMoviez = async (page, searchTerm="") => {
        try{
            this.setState({ error: false, loading: true});

            console.log("working?")
            const movies = await API.fetchMovies(searchTerm, page);
            //console.log(movies);

            this.setState(prev =>({
                ...prev, 
                movies: {
                    ...movies,
                    results:
                        page > 1 ? [...prev.movies.results, ...movies.results] : [...movies.results]
                },
                loading: false,
            }));
           
        }catch(error){
            this.setState({error: false, loading: false})
        }
    
    };

    handleSearch = searchTerm => {
        this.setState({ movies: initialState, searchTerm}, () => {
            this.fetchMovies(1,this.state.searchTerm)
        })
    }

    handleLoadMore = () => this.fetchMoviez(this.state.movies.page + 1, this.state.searchTerm);
    
    render() {
        const { movies, loading, error, searchTerm } = this.state;
        
        if (error) return <div>Something Went Wrong</div>;
        
       
        return (
           
            <>
                {!searchTerm && movies.results[0] ? (
                    <HeroImage 
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
                            title = {movies.results[0].original_title} text = {movies.results[0].overview}
                    />
                    ) : null } 
    
                <SearchBar setSearchTerm={ this.handleSearch} />
    
                <Grid header={searchTerm ? `Search Result`:`Popular Movies`}>
                    {movies.results.map( movie =>(
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
                
                {loading ? <Spinner/>: null}
                { movies.page < movies.total_pages && !loading && (
                    <Button text='Load More' callback={this.handleLoadMore} />
                )}
    
            </>
        );

    }
    
};

export default Home;

