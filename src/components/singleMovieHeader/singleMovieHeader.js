import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Like from '../favourite/Like';
import './singleMovieHeader.css'

export default function singleMovieHeader() {
    return (
        <Container>
            <Row>
                <Col xs="12" className="movie-header">
                    <button className="back">
                        <i className="icon ion-ios-arrow-back"></i>
                    </button>
                    <div className="ml-auto">
                        <Like />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
