import React, {useEffect, useState} from 'react'
import { Col, Row } from 'reactstrap';
import ContentLoader from "react-content-loader"
import {Link} from 'gatsby';

import './Card.css';

export default function Card(props) {
    const globalWindow = typeof window !== 'undefined' && window;
    const [ imageHeight, setimageHeight ] = useState(240)

    useEffect(() => {

        const handleResize = () => {
            const imageDiv = document.querySelector('.card__cover');
            if (imageDiv) {
                setimageHeight(imageDiv.offsetHeight)
            }
        }

        handleResize();
        globalWindow && globalWindow.addEventListener('resize', handleResize);
    })

    return (
        <Col xs="6" lg="6" sm="12" {...props} >
            <div className="card card--list">
                <Row>
                    <Col sm="4" xs="12">
                        <div className="card__cover">
                            <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height={`${imageHeight}px`} style={{ width: "100%" }}>
                                <rect x="20" y="0" rx="5" ry="5" style={{ width: "100%" }} />
                            </ContentLoader>
                        </div>
                    </Col>
                    <Col sm="8" xs="12" >
                        <div className="card__content">
                            <Link to='#' className="d-flex align-items-center" >
                                <h3 className="card__title">
                                    <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height="80px" style={{ width: "100%" }}>
                                        <rect x="0" y="0" rx="5" ry="5" style={{ height: "40px", width: "100%" }} />
                                    </ContentLoader>
                                </h3>
                            </Link>
                            <span className="card__category">
                                <span>
                                    <rect x="0" y="0" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                </span>
                            </span>

                            <div className="card__wrap">

                                <ul className="card__list">
                                    {/* <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height="30px" width="30px">
                                        <circle cx="25" cy="15" r="15" />
                                    </ContentLoader>

                                    <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height="30px" width="30px">
                                        <circle cx="35" cy="15" r="15" />
                                    </ContentLoader> */}
                                </ul>
                            </div>

                            <div className="card__description">
                                <p>
                                    <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" style={{ minHeight: '70px', width: '100%' }}>
                                        <rect x="0" y="0" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                        <rect x="0" y="25" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                        <rect x="0" y="50" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                        <rect x="0" y="75" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                        <rect x="0" y="100" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                    </ContentLoader>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}