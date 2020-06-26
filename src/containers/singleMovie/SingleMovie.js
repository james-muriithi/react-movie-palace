import React, {useEffect, useState} from 'react'

import MovieDetails from '../../components/movieDetails/MovieDetails';
import Header from '../../components/singleMovieHeader/singleMovieHeader';
import BigHeader from '../../components/header/Header';
import Recommendation from '../../components/recommendations/Recommendation';
import Footer from '../../components/footer/Footer';
import Cast from '../../components/cast/Cast';
import { Container, Row } from 'reactstrap';
import Trailer from '../../components/trailer/Trailer';

export default function SingleMovie() {
    const globalWindow = typeof window !== 'undefined' && window;
    const [small, setSmall] = useState(globalWindow ? globalWindow.innerWidth <= 576 : false)
    useEffect(() => {
        function handleResize() {
            if (globalWindow && globalWindow.innerWidth > 576 ) {
                setSmall(() => false)
            }else{
                setSmall(() => true)
            }
        }
        globalWindow && globalWindow.addEventListener('resize', handleResize);
    })
    return (
        <>
            {small ? <Header /> : <BigHeader /> }
            <section className="section details">
                <MovieDetails />
                    <Recommendation />
                    <Row>
                        <Cast />
                        <Trailer />
                    </Row>
            </section>
            <Footer />
        </>
    )
}
