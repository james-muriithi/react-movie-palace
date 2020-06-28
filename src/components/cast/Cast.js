import React from 'react'
import { Col } from 'reactstrap'
import Slider from 'react-slick'

import CastCard from './CastCard'
import Placeholder from '../../components/placeholder/Placeholder';

export default function Cast({casts}) {
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
            {casts ? (
                <>
                    {casts.length && <Col xs="12">
                        <h2 className="section__title fs-22">Movie Cast</h2>
                    </Col>}
                    <Slider
                        className="owl-theme"
                        {...settings}>
                        {casts.map((cast, index) => (
                            <CastCard cast={cast} key={index} />
                        ))}
                    </Slider>
                </>
            ) : (
                    <>
                        <Col xs="12">
                            <h2 className="section__title fs-22">Movie Cast</h2>
                        </Col>
                        <Slider
                            className="owl-theme"
                            {...settings}
                            slidesToShow={2}
                            responsive={[
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                    }
                                }
                            ]}>
                            <Col xs="12" className="item">
                                <div className="card">
                                    <Placeholder />
                                </div>
                            </Col>
                            <Col xs="12" className="item">
                                <div className="card">
                                    <Placeholder />
                                </div>
                            </Col>
                            <Col xs="12" className="item">
                                <div className="card">
                                    <Placeholder />
                                </div>
                            </Col>
                            <Col xs="12" className="item">
                                <div className="card">
                                    <Placeholder />
                                </div>
                            </Col>
                            <Col xs="12" className="item">
                                <div className="card">
                                    <Placeholder />
                                </div>
                            </Col>
                            <Col xs="12" className="item">
                                <div className="card">
                                    <Placeholder />
                                </div>
                            </Col>
                        </Slider>
                    </>
                )}
            

        </Col>
    )
}
