import React from 'react'
import {Col, Row} from 'reactstrap';
import Img from '../image/Image';
import {Link} from 'gatsby';

import shareSvg from '../../images/share.svg';
import './Card.css';

export default function Card() {
    return (
        <Col xs="6" lg="6" sm="12" >
            <div className="card card--list">
                <Row>
                    <Col sm="4" xs="12">
                        <div className="card__cover">
                            <Img image={{ src: 'https://raw.githubusercontent.com/Aljullu/react-lazy-load-image-component-demo/master/images/01.jpg'}} />
                        </div>
                    </Col>
                    <Col sm="8" xs="12" >
                        <div className="card__content">
                            <Link to="#" >
                                <h3 className="card__title">
                                    Movie Name
                                </h3>
                            </Link>
                            <span className="card__category">
                                <a href="#">hello</a>
                            </span>

                            <div className="card__wrap">
                                <span className="card__rate">
                                    <i className="icon ion-ios-star"></i> 8.5
                                    <span className="total_votes pl-1">
                                        <span> / 20 Votes</span>
                                    </span>
                                </span>
                                <ul className="card__list">
                                    <li>
                                        Release Date:
                                    </li>
                                    <li className="grid-share-btn" style={{ borderRadius: '50%', padding: '10px', cursor: 'pointer'}} data-title="" data-url="" data-rating="" data-overview="">
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
        </Col>
    )
}

