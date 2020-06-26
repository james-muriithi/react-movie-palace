import React from 'react'
import {Col, Row} from 'reactstrap';
import Img from '../image/Image';
import {Link} from 'gatsby';
import { Fade } from "react-reveal";

import shareSvg from '../../images/share.svg';
import Like from '../favourite/Like';
import './Card.css';

export default function Card() {
    return (
        <Col xs="6" lg="6" sm="12" className="movie-card" >
            <Fade bottom duration={800} distance="20px">
            <div className="card card--list">
                <Row>
                    <Col sm="4" xs="12">
                        <div className="card__cover">
                            <Img width="100%" image={{ src: 'https://image.tmdb.org/t/p/w200/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'}} />
                            <Link to="/movie" className="card__play" aria-label="check movie">
                                <i className="icon ion-ios-play"></i>
                            </Link>
                            <span className="card__rate card__rate--green">7.1</span>
                        </div>
                    </Col>
                    <Col sm="8" xs="12" >
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
                                    <li className="grid-share-btn d-inline-block" style={{ borderRadius: '50%', padding: '10px', cursor: 'pointer'}} data-title="" data-url="" data-rating="" data-overview="">
                                        <img src={shareSvg} alt="share"/>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="card__description">
                                <p>
                                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you
                                    cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:
                                    https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </Fade>
        </Col>
    )
}

