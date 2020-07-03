import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ContentLoader from "react-content-loader"

import SEO from '../seo/Seo';
import './MovieDetails.css'

function MovieDetailsPlaceHolder() {
    const globalWindow = typeof window !== 'undefined' && window;

    const [ height, setHeight ] = useState(600);
    
    const [ imageHeight, setimageHeight ] = useState(240)

    useEffect(() => {

        const handleResize = () => {
            const imageDiv = document.querySelector('.imageDiv');
            if (imageDiv) {
                setimageHeight(imageDiv.offsetHeight)
            }
            setHeight(globalWindow.innerHeight)
        }

        handleResize();
        globalWindow && globalWindow.addEventListener('resize', handleResize);
    })

    return (
        <>
            <SEO />
            
            <Container>
                <Row>
                    <Col xl="12" >
                        <div className="card card--details card--series" style={{ minHeight: `${parseInt(height) - 150}px` }} >
                            <Row>
                                <Col xs="12" sm="4" lg="3" className="imageDiv" >
                                    <div className="card__cover my-card" >
                                        <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height={`${imageHeight}px`} style={{ width: "100%" }}>
                                            <rect x="20" y="0" rx="5" ry="5" style={{ width: "100%" }} />
                                        </ContentLoader>
                                        <span className="rd__rate--green"></span>
                                    </div>
                                </Col>
                                <Col xs="12" sm="8" lg="9">
                                    <div className="card__content my-card">
                                        <Col xs="12" className="p-l-0">
                                            <h1 className="details__title">
                                                <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height="80px" style={{ width: "100%" }}>
                                                    <rect x="0" y="0" rx="5" ry="5" style={{ height:"40px", width: "100%" }} />
                                                </ContentLoader>
                                            </h1>
                                        </Col>
                                        <div className="card__wrap">
                                            <ul className="card__list single">
                                                <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height="70px" width="70px">
                                                    <circle cx="25" cy="25" r="25" />
                                                </ContentLoader>

                                                <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height="70px" width="70px">
                                                    <circle cx="25" cy="25" r="25" />
                                                </ContentLoader>

                                                <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" height="70px" width="70px">
                                                    <circle cx="25" cy="25" r="25" />
                                                </ContentLoader>
                                            </ul>
                                        </div>
                                        <ul className="card__meta">
                                            

                                        </ul>
                                        <div className="card__description card__description--details">
                                            <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" style={{minHeight: '70px', width: '100%'}}>
                                                <rect x="0" y="0" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                                <rect x="0" y="25" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                                <rect x="0" y="50" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                                <rect x="0" y="75" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                                <rect x="0" y="100" rx="5" ry="5" width="250" height="10" style={{ width: "100%" }} />
                                            </ContentLoader>
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

export default MovieDetailsPlaceHolder;