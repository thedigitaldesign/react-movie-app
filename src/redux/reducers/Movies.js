import { dMovies } from '../dispatch'

const initialState = {
    IMDb: [
        { id: 'tt2911666' },
        { id: 'tt4425200' },
        { id: 'tt6146586' },
        { id: 'tt0133093' },
        { id: 'tt0086190' },
        { id: 'tt1104001' },
        { id: 'tt0217869' },
        { id: 'tt0093779' }
    ],
    movies: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case dMovies.IMDB_ID_LIST:
            return { 
                ...state, 
                ...payload 
            }
        case dMovies.MOVIES_LIST:
            console.log('[Reducer:Movies] state: ', state)
            console.log('[Reducer:Movies] payload: ', payload)
            
            return { 
                ...state,
                movies: state.movies.concat({
                    Id: payload.id,
                    Title: payload.title,
                    Poster: payload.poster
                })
            }

        default:
            return state
    }
}
