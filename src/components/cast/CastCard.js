import React from 'react'
import { Col } from 'reactstrap';
import Img from '../image/Image';
import { Fade } from "react-reveal";

export default function CastCard() {
    return (
        <Col xs="12" className="item" >
            <Fade distance='40px' bottom duration={800}>
                <div className="card">
                    <div className="card__cover cast">
                        <Img image={{ width: "100%", height: '100%', src: 'https://image.tmdb.org/t/p/w200/ggFHVNu6YYI5L9pCfOacjizRGt.jpg' }} />
                    </div>
                    <div className="card__content">
                        <div className="d-flex align-items-center" >
                            <h3 className="card__title">
                                Actor Name
                                </h3>
                        </div>
                        <span className="card__category">
                            <span>character</span>
                        </span>
                    </div>
                </div>

            </Fade>
        </Col>
    )
}
