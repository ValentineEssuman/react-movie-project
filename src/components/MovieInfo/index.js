import  React, { useContext } from 'react';

//componentss
import Thumb from '../Thumb';
import Rate from '../Rate';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

//image
import NoImage  from '../../images/noimage.jpg';
import API from '../../API';

//styles
import { Wrapper, Content, Text } from '../MovieInfo/MovieInfo.styles';

//context
import { Context } from '../../context';


const MovieInfo = ({themovie}) =>{ 
    const [user] = useContext(Context);

    const handleRating = async value => {
        const rate = await API. rateMovie(user.id, themovie.id, value)
        console.log('rate', rate);
    }

    return(
        
        <Wrapper backdrop={ themovie.backdrop_path }>
            <Content>
                <Thumb 
                    key={themovie.id}
                    clicker={false}
                    image = {themovie.poster_path ?
                        IMAGE_BASE_URL + POSTER_SIZE + themovie.poster_path
                        : NoImage
                    }
                    movieId={themovie.id}
                />
                <Text>
                    <h1>{themovie.title}</h1>
                    <h2>PLOT</h2>
                    <h3>{themovie.overview}</h3>
    
                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{themovie.vote_average}</div>
    
                        </div>
    
                        <div className='director'>
                            <h3>DIRECTOR{themovie.directors.length > 1 ? 's': ''}</h3>
                            {themovie.directors
                                .map(director =>(<p key={director.credit_id}>{director.name}</p>) 
                                )
                            }
                        </div>
    
                    </div>

                    {user && (
                        <div>
                            <p>Rate Movie</p>
                            <Rate callback={ handleRating}/>
                        </div>
                    )}
                </Text>
            </Content>
        </Wrapper>
    
    
    )

} 


    
    
    

export default MovieInfo;