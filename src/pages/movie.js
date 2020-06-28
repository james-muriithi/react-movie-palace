import React from 'react';

import SingleMovie from '../containers/singleMovie/SingleMovie';
import Layout from '../containers/layout/Layout';

export default function Movie(props) {
    const globalWindow = typeof window !== 'undefined' && window;
    

    const getMovieId = () => {
        const location = props.location;
        const movieId = location && location.pathname.split('/')[ 2 ]
        if (movieId) {
            return movieId;
        }
        if (globalWindow.location) {
            globalWindow.location.href = '/';
        }
    }
    
    return (
        <Layout>
            <SingleMovie movieId={getMovieId()} />
        </Layout>
    )
}
