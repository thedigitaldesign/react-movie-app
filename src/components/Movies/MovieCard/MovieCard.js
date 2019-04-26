import React, {  } from 'react'

// Packages
import { Link, withRouter } from 'react-router-dom'

// Components
import MoviePoster from '../MoviePoster/MoviePoster'

// CSS
import css from './MovieCard.module.scss'

const MovieCard = (props) => {
    return (
        <Link to={`/movie/${ props.imdbId }`}>
            <div className={`col-lg-3 mx-1 my-1 ${ css.movie_card }`}>
                <MoviePoster image={props.image} alt={props.alt} />
                {/* <img src={props.image} alt={props.alt} /> */}
                <h5>{props.title}</h5>
            </div>
        </Link>
    )
}

export default withRouter(MovieCard)
