import React, { Component, Suspense } from 'react'

// Packages
import axios from '../../../utils/API/axios-omdbapi-data'
import { Route } from 'react-router-dom'

// Components
import Spinner from '../../../structure/UI/Spinner/Spinner'

// Lazy
const MoviePoster = React.lazy(() => import('../MoviePoster/MoviePoster'))

export default class MovieDetails extends Component {
    componentDidMount() {
        axios.get('', { params: { i: this.props.match.params.id, plot: 'full' } })
            .then(response => {
                console.log(response)
                this.setState({
                    details: response.data
                })
            })
            .catch(error => {

            })
    }

    render() {
        const details = this.state.details;

        return (
            <article className={`row`}>
                <div className={`col-sm-4`}>
                    <Route path="/movie/:id" render={() => (
                        <Suspense fallback={<Spinner />}>
                            <MoviePoster image={details.Poster} alt={details.Title} />
                        </Suspense>
                    )} />

                    <ul className={`list-unstyled mt-2`}>
                        <li>
                            <label><strong>Actors:</strong> {details.Actors}</label>
                        </li>
                        <li>
                            <label><strong>Director:</strong> {details.Director}</label>
                        </li>
                        <li>
                            <label><strong>Awards:</strong> {details.Awards}</label>
                        </li>
                        <li>
                            <label><strong>Rated:</strong> {details.Rated}</label>
                        </li>
                        <li>
                            <label><strong>Runtime:</strong> {details.Runtime}</label>
                        </li>
                    </ul>
                </div>

                <div className={`col-sm-5`}>
                    <h1>{details.Title}</h1>
                    <p>
                        {details.Plot}
                    </p>
                </div>

                <div className={`col-sm-3`}>
                    <ul className={`list-unstyled`}>
                        <li>
                            <label><strong>Genre:</strong> {details.Genre}</label>
                        </li>
                        <li>
                            <label><strong>Metascore:</strong> {details.Metascore}</label>
                        </li>
                        <li>
                            <label><strong>Released:</strong> {details.Released}</label>
                        </li>
                    </ul>
                </div>
            </article>
        )
    }
}

