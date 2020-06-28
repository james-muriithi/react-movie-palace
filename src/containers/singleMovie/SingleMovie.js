import React, {useEffect, useState} from 'react'
import axios from "axios";

import MovieDetails from '../../components/movieDetails/MovieDetails';
import MovieDetailsPlaceHolder from '../../components/movieDetails/MovieDetailsPlaceHolder';
import Header from '../../components/singleMovieHeader/singleMovieHeader';
import BigHeader from '../../components/header/Header';
import Recommendation from '../../components/recommendations/Recommendation';
import Footer from '../../components/footer/Footer';
import Cast from '../../components/cast/Cast';
import { Container, Row } from 'reactstrap';
import Trailer from '../../components/trailer/Trailer';

export default function SingleMovie(props) {
    const globalWindow = typeof window !== 'undefined' && window;
    const [small, setSmall] = useState(globalWindow ? globalWindow.innerWidth <= 576 : false)

    const [ movieData, setMovieData ] = useState([])
    const [ isLoaded, setLoaded ] = useState(false)


    useEffect(() => {

        const fetchMovieData = () => {
            axios.get(`https://movie-palace-api.herokuapp.com/movie/${props.movieId}`)
                .then(data => {
                    setMovieData(data.data);
                    setLoaded(true);
                })
        }
        fetchMovieData();

        function handleResize() {
            if (globalWindow && globalWindow.innerWidth > 576 ) {
                setSmall(() => false)
            }else{
                setSmall(() => true)
            }
        }
        globalWindow && globalWindow.addEventListener('resize', handleResize);
    }, [ props.movieId, globalWindow])
    return (
        <>
            {small ? <Header title={isLoaded && movieData.data.title}  /> : <BigHeader /> }
            <section className="section details">
                {isLoaded ? <MovieDetails movie={movieData.data} /> : <MovieDetailsPlaceHolder /> }
                <Container>
                    <Row>
                        {<Recommendation recommendations={movieData.recommendations} />}
                        {<Cast casts={movieData.cast} />}
                        {isLoaded && <Trailer video={movieData.data.videos.results[0]} />}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}
