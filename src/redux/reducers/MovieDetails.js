import { dMovieDetails } from '../dispatch'

const initialState = {
    details: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case dMovieDetails.MOVIE_DETAILS:
            return { 
                ...state, 
                ...payload 
            }

        default:
            return state
    }
}
