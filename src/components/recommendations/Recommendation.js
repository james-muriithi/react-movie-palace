import React from 'react'


import './Recommendation.css';
import { Col } from 'reactstrap';
import Card from '../recommendationCard/RecommendationCard';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Recommendation() {
    return (
        <Col xs="12">
            <Col xs="12">
                <h2 className="section__title">
                    Recommended
                </h2>
            </Col>
            <OwlCarousel
                className="owl-theme"
                loop={false}
                margin={10}
                nav={true}
                dots={false}
                responsive= {{
                0: {
                items: 2
                },
                600: {
                items: 3
                },
                1000: {
                items: 6
                }}
            }> 
                <Card />
                <Card />
                <Card />
                <Card />
            </OwlCarousel>
        </Col>
    )
}
