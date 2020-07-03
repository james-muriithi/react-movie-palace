import React from 'react';

import SingleMovie from '../containers/singleMovie/SingleMovie';
import Layout from '../containers/layout/Layout';
import withLocation from "../components/WithLocation";
import SEO from '../components/seo/Seo';

function Movie({search}) {
    const globalWindow = typeof window !== 'undefined' && window;
    

    const getMovieId = () => {
        const {m} = search
        if (m) {
            console.log(m);
            return m;
        }
        if (globalWindow.location) {
            globalWindow.location.href = '/';
        }
    }
    
    return (
        <Layout>
            <SEO />
            <SingleMovie movieId={getMovieId()} />
        </Layout>
    )
}

export default withLocation(Movie);