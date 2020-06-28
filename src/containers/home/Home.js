import React,{useState, useEffect} from 'react'
import {Container, Row} from 'reactstrap';
import axios from 'axios';

import './Home.css';

import Card from '../../components/card/Card';
import Placeholder from '../../components/card/CardPlaceholder';
import Footer from '../../components/footer/Footer';

export default function Home() {
    const [ data, setData ] = useState([])
    const [ isLoaded, setLoaded ] = useState(false)
    
    useEffect(() => {
        const fetchHomeData = () =>{
            axios.get('https://movie-palace-api.herokuapp.com/')
            .then(data =>{
                setTimeout(() => {
                    setData(data.data);
                    setLoaded(true);
                }, 1000);
            })
            
        }

        fetchHomeData();
    }, [])

    const showMovieCards = (data) => {
        return data.map((movie, index) => (
            <Card className="movie-card" movie={movie} key={index} />
        ));
    }

    const showLoadingCards = () => {
        return(
            <>
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
            </>
        );
    }



    return (
        <>
        <section className="home">
            <Container>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active">
                        <Row>
                                {isLoaded ? showMovieCards(data) : showLoadingCards()}
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
        <Footer />
        </>
    )
}