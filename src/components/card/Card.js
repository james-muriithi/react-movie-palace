import React from 'react'
import {Col, Row} from 'reactstrap';
import Img from '../image/Image';
import {Link} from 'gatsby';
import { Fade } from "react-reveal";
import PropTypes from "prop-types";

import shareSvg from '../../images/share.svg';
import Like from '../favourite/Like';
import './Card.css';
import placeholderSrc from '../../images/posterplaceholder_gm4xhm.jpg';

export default function Card({movie, ...props}) {
    const ImageEndpoint = 'https://image.tmdb.org/t/p/w200'
    const imageSrc = movie.backdrop_path ? `${ImageEndpoint}${movie.poster_path}` : placeholderSrc
    const title = movie.title ? movie.title : movie.name;
    let url = '/';
    if (movie.media_type === 'movie') {
        url = `movie/?m=${movie.id}`
    }
    return (
        <Col xs="6" lg="6" sm="12" {...props} >
            <Fade bottom duration={800} distance="20px">
            <div className="card card--list">
                <Row>
                    <Col sm="4" xs="12">
                        <div className="card__cover">
                                <Img  
                                    image={{ width:"150px", src: imageSrc}} />
                                <Link to={url} state={{ title }} className="card__play" aria-label="check movie">
                                <i className="icon ion-ios-play"></i>
                            </Link>
                                <span className="card__rate card__rate--green">{movie.vote_average}</span>
                        </div>
                    </Col>
                    <Col sm="8" xs="12" >
                        <div className="card__content">
                                <Link to={url} state={{ title }} className="d-flex align-items-center" >
                                <h3 className="card__title"> 
                                    {title}
                                </h3>
                            </Link>
                            <span className="card__category">
                                <span>
                                        {movie.genre_ids && movie.genre_ids.join(', ')}
                                </span>
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
                                    {movie.overview}
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

Card.propTypes = {
    movie: PropTypes.object.isRequired
}