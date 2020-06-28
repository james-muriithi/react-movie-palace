import React from 'react'
import {Col} from 'reactstrap';
import Img from '../image/Image';
import { Link } from 'gatsby';
import { Fade } from "react-reveal";

import shareSvg from '../../images/share.svg';
import Like from '../favourite/Like';
import placeholderSrc from '../../images/posterplaceholder_gm4xhm.jpg';
import "./RemocandationCard.css";

export default function RecommendationCard({movie}) {
    const ImageEndpoint = 'https://image.tmdb.org/t/p/w154'
    const imageSrc = movie.backdrop_path ? `${ImageEndpoint}${movie.poster_path}` : placeholderSrc

    const url = `/movie/${movie.id}`

    return (
        <Col xs="12" className="item" >
            <Fade distance='40px' bottom duration={800}>
                <div className="card">
                    <div className="card__cover">
                        <Img image={{ width: "100%", height: '100%', src: imageSrc }} />
                        <Link to={url} className="card__play" aria-label="check movie">
                            <i className="icon ion-ios-play"></i>
                        </Link>
                        <span className="card__rate card__rate--green">{movie.vote_average}</span>
                    </div>
                    <div className="card__content">
                        <Link to={url} className="d-flex align-items-center" >
                            <h3 className="card__title">
                                {movie.title}
                                </h3>
                        </Link>
                        <span className="card__category">
                            <span>

                            </span>
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
