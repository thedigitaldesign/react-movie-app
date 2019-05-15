import React, { Component } from 'react'

// Utils
import AppRoutes from './utils/Routes/Routes'

// Packages
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Layout from './structure/Layout/Layout'
import MovieApp from './components/MovieApp/MovieApp'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <AppRoutes />
                </Layout>
            </BrowserRouter>
        )
    }
}
