import React from 'react'
import {Col} from 'reactstrap';
import Img from '../image/Image';
import { Link } from 'gatsby';
import { Fade } from "react-reveal";

import shareSvg from '../../images/share.svg';
import Like from '../favourite/Like';
import "./RemocandationCard.css";

export default function RecommendationCard() {
    return (
        <Col xs="12" className="item" >
            <Fade distance='40px' bottom duration={800}>
                <div className="card">
                    <div className="card__cover">
                        <Img image={{ width: "100%", height: '100%', src: 'https://image.tmdb.org/t/p/w200/ggFHVNu6YYI5L9pCfOacjizRGt.jpg' }} />
                        <Link to="/movie" className="card__play" aria-label="check movie">
                            <i className="icon ion-ios-play"></i>
                        </Link>
                        <span className="card__rate card__rate--green">7.1</span>
                    </div>
                    <div className="card__content">
                        <Link to="/movie" className="d-flex align-items-center" >
                            <h3 className="card__title">
                                Movie Name
                                </h3>
                        </Link>
                        <span className="card__category">
                            <span>hello, hello, comedy</span>
                        </span>
                        <div className="card__wrap">

                            <ul className="card__list">
                                <li className="d-inline-block" >
                                    <Like />
                                </li>
                                <li className="grid-share-btn d-inline-block mr-2" style={{ borderRadius: '50%', padding: '10px', cursor: 'pointer' }} data-title="" data-url="" data-rating="" data-overview="">
                                    <img src={shareSvg} alt="share" />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </Fade>
        </Col>
    )
}
