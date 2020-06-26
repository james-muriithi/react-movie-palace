import React from 'react'


import './Recommendation.css';
import { Col } from 'reactstrap';
import Card from '../recommendationCard/RecommendationCard';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Recommendation() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <Col xs="12">
            <Col xs="12">
                <h2 className="section__title">
                    Recommended
                </h2>
            </Col>
            <Slider
                className="owl-theme"
                {...settings}> 
                <Card />
                <Card />
                <Card />
                <Card />
            </Slider>
        </Col>
    )
}
