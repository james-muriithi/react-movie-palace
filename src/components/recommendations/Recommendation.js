import React from 'react'


import { Col } from 'reactstrap';
import Card from '../recommendationCard/RecommendationCard';
import Placeholder from '../../components/placeholder/Placeholder';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './Recommendation.css';

export default function Recommendation({recommendations}) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                }
            },
            {
                breakpoint: 926,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
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

    const showRecommendationCards = (data) => {
        return data.map((movie, index) => (
            <Card className="movie-card" movie={movie} key={index} />
        ));
    }

    return (
        <Col xs="12">
            {recommendations ? (
                <div>
                    <Col xs="12">
                        {recommendations.length && <h2 className="section__title">
                            Recommended
                        </h2>}
                    </Col>
                    <Slider
                        className="owl-theme"
                        style={{
                            marginLeft: "0px"
                        }}
                        {...settings}>
                        {showRecommendationCards(recommendations)}
                    </Slider>
                </div>
            ) : (
                    <div>
                        <Col xs="12">
                            <h2 className="section__title">
                                Recommended
                            </h2>
                        </Col>
                        <Slider
                            className="owl-theme"
                            style={{
                                marginLeft: "0px"
                            }}
                            {...settings}
                            slidesToShow={3}
                            responsive={[
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                }
                            ]}
                            >
                            <Col xs="12" className="item">
                                <Placeholder />
                            </Col>
                            <Col xs="12" className="item">
                                <Placeholder />
                            </Col>
                            <Col xs="12" className="item">
                                <Placeholder />
                            </Col>
                            <Col xs="12" className="item">
                                <Placeholder />
                            </Col>
                            <Col xs="12" className="item">
                                <Placeholder />
                            </Col>
                            <Col xs="12" className="item">
                                <Placeholder />
                            </Col>
                            
                        </Slider>
                    </div>
            )}
        </Col>
    )
}
