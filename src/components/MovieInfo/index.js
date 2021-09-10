import  React from 'react';

//componentss
import Thumb from '../Thumb';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

//image
import NoImage  from '../../images/noimage.jpg';


//styles
import { Wrapper, Content, Text } from '../MovieInfo/MovieInfo.styles';

const MovieInfo = ({themovie}) => (
    
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
            </Text>
        </Content>
    </Wrapper>


)

export default MovieInfo;