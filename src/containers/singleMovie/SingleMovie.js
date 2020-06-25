import React, {useEffect, useState} from 'react'

import MovieDetails from '../../components/movieDetails/MovieDetails';
import Header from '../../components/singleMovieHeader/singleMovieHeader';
import BigHeader from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function SingleMovie() {
    const [small, setSmall] = useState(window.innerWidth <= 576)
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 576 ) {
                setSmall(() => false)
            }else{
                setSmall(() => true)
            }
        }
        window.addEventListener('resize', handleResize);
    })
    return (
        <>
            {small ? <Header /> : <BigHeader /> }
            <section className="section details">
                <MovieDetails />
            </section>
            <Footer />
        </>
    )
}
