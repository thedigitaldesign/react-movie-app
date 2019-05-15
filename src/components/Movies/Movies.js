import React, { Component, Suspense } from 'react'

// Packages
import { connect } from 'react-redux'

// Utils
import axios from '../../utils/API/axios-omdbapi-data'

// Components
import MovieCard from './MovieCard/MovieCard'

// Consts
import { dMovies } from '../../redux/dispatch'

class Movies extends Component {
    componentDidMount() {
        this.props.IMDb.map((data) => {
            return this.getMovies(data.id)
        })
    }

    getMovies = (id) => {
        axios.get('', { params: { i: id, plot: 'full' } })
            .then(response => {
                this.props.AddMovies(
                    response.data.imdbID,
                    response.data.Title,
                    response.data.Poster
                )
            })
            .catch(error => {

            })
            .then(() => {
                //console.log(this.state.movies)
            })
    }

    render() {
        let movies = this.props.movies.map(data => {
            return <MovieCard key={data.Id} image={data.Poster} alt={data.Title} imdbId={data.Id} />
        })

        return (
            <>
                <h1>Movies</h1>
                <div className={`row`}>
                    {movies}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        IMDb: state.Movies.IMDb,
        movies: state.Movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddMovies: (id, title, poster) => dispatch ({
            type: dMovies.MOVIES_LIST,
            payload: {
                id,
                title,
                poster
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
