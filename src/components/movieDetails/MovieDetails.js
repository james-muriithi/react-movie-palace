import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'reactstrap';

import Img from '../image/Image';
import shareSvg from '../../images/share.svg';
import Like from '../favourite/Like';
import './MovieDetails.css'

function MovieDetails({movie}) {
    return (
        <>
            <div className="details__bg" data-bg="" style={{ height: window.innerHeight}}></div>
            <Container>
                <Row>
                    <Col xl="12" >
                        <div className="card card--details card--series">
                            <Row>
                                <Col xs="12" sm="4" lg="3" >
                                    <div className="card__cover my-card">
                                        <Img image={{width: '100%', height: '100%', src: 'https://image.tmdb.org/t/p/w300/gPBf35AqvXHvKEpDHaQ4D9xXxeX.jpg' }} />
                                        <span className="card__rate card__rate--green">7.1</span>
                                    </div>
                                </Col>
                                <Col xs="12" sm="8" lg="9">
                                    <div className="card__content my-card">
                                        <Col cs="12" className="p-l-0">
                                            <h1 className="details__title">
                                                Perry Mason
                                            </h1>
                                        </Col>
                                        <div className="card__wrap">
                                            <ul className="card__list single">
                                                <li>HD</li>
                                                <li>18+</li>
                                                <li className="d-inline-block like" >
                                                    <Like />
                                                </li>
                                                <li className="share-btn d-inline-block" style={{ borderRadius: '50%', padding: '10px', cursor: 'pointer' }} data-title="" data-url="" data-rating="" data-overview="">
                                                    <img src={shareSvg} alt="share" />
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="card__meta">
                                            <li className="genre">
                                                <span>Genre:</span>
                                                comedy, drama, horror
                                            </li>
                                            <li><span>Release date:</span>
                                            </li>
                                            <li><span>Running time:</span>

                                            </li>
                                            <li><span>Country:</span>

                                            </li>

                                        </ul>
                                        <div className="card__description card__description--details">
                                            Set in 1932 Los Angeles, the series focuses on the origin story of famed defense lawyer Perry Mason. Living check-to-check as a low-rent private investigator, Mason is haunted by his wartime experiences in France and suffering the effects of a broken marriage. L.A. is booming while the rest of the country recovers from the Great Depression — but a kidnapping gone very wrong leads to Mason exposing a fractured city as he uncovers the truth of the crime.
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

MovieDetails.defaultProps = {

}

MovieDetails.propTypes = {
    movie : PropTypes.object.isRequired
}

export default MovieDetails

