import React from 'react'
import { Col } from 'reactstrap'
import Slider from 'react-slick'

import CastCard from './CastCard'

export default function Cast() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
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
        <Col xs="12" xl="7">
            <Col xs="12">
                <h2 className="section__title fs-22">Movie Cast</h2>
            </Col>
            <Slider
                className="owl-theme"
                {...settings}
            >
                <CastCard />
                <CastCard />
                <CastCard />
                <CastCard />
                <CastCard />
            </Slider>

        </Col>
    )
}
