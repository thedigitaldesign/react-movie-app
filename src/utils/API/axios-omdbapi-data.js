// Packages
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey: process.env.REACT_APP_OMDB_API_KEY
    }
})

export default instance
