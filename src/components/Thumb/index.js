import React  from 'react';
import { Link } from 'react-router-dom';

import { Image }  from './Thumb.styles';

const Thumb = ({image, movieId, clicker})=> {
    return (
        <div>
            { clicker ? 
                (
                    <Link to={`/${movieId}`}>
                        <Image src={image} alt='movie-thumb' />
                    </Link>
                ): (
                    <Image src={image} alt='movie-thumb' />
                ) 
            }
        </div>

    )
}



export default Thumb;