import React from 'react'
import {Container, Row} from 'reactstrap';

import './Home.css';

import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

export default function Home() {
    return (
        <>
        <section className="home">
            <Container>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active">
                        <Row>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
        <Footer />
        </>
    )
}