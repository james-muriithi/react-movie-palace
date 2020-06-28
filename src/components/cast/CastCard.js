import React from 'react'
import { Col } from 'reactstrap';
import Img from '../image/Image';
import { Fade } from "react-reveal";
import PropTypes from "prop-types";
import placeholderSrc from '../../images/posterplaceholder_gm4xhm.jpg';

export default function CastCard({cast}) {
    const ImageEndpoint = 'https://image.tmdb.org/t/p/w154'
    const imageSrc = cast.profile_path ? `${ImageEndpoint}${cast.profile_path}` : placeholderSrc
    return (
        <Col xs="12" className="item" >
            <Fade distance='40px' bottom duration={800}>
                <div className="card">
                    <div className="card__cover cast">
                        <Img image={{ width: "100%", height: '100%', src: imageSrc }} />
                    </div>
                    <div className="card__content">
                        <div className="d-flex align-items-center" >
                            <h3 className="card__title">
                                {cast.name}
                                </h3>
                        </div>
                        <span className="card__category">
                            <span>{cast.character}</span>
                        </span>
                    </div>
                </div>

            </Fade>
        </Col>
    )
}

CastCard.propTypes = {
    cast : PropTypes.object.isRequired
}