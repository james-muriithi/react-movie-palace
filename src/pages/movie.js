import React from 'react';

import SingleMovie from '../containers/singleMovie/SingleMovie';
import SEO from '../components/seo/Seo';

export default function Movie() {
    return (
        <>
            <SEO />
            <SingleMovie />
        </>
    )
}
