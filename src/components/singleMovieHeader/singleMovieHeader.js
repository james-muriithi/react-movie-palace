import React, {useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import tinycolor from 'tinycolor2';

// import shareSvg from '../../images/share.svg';
import './singleMovieHeader.css'

export default function SingleMovieHeader({changeColor}) {
    const globalWindow = typeof window !== 'undefined' && window;

    useEffect(() => {
        function handleScroll() {
            const header = document.getElementsByClassName('movie-header')[ 0 ]
            const title = header && header.getElementsByClassName('details__title')[ 0 ];
            const backButton = header && header.getElementsByClassName('back')[ 0 ];


            if (title && globalWindow.pageYOffset > 430) {
                title.classList.remove('d-none')
                header.classList.add('show__bg')
                const bgColor = tinycolor(header.style.background)
                if (bgColor.isValid() && bgColor.isLight()) {
                    title.classList.add('text-black');
                    backButton.classList.add('text-black');
                }
            }else if(title){
                title.classList.add('d-none')
                header.classList.remove('show__bg')
                title.classList.remove('text-black');
                backButton.classList.remove('text-black');
            }
        }
        handleScroll();
        globalWindow.addEventListener('scroll', handleScroll);
    })

    return (
        <Container>
            <Row>
                <Col xs="12" className="movie-header">
                    <Container className="h-100">
                        <Row className="align-items-center h-100">
                            <button className="back text-white">
                                <i className="icon ion-ios-arrow-back"></i>
                            </button>

                            <h1 className="details__title pt-3 pl-3 d-none">
                                Perry Mason Perry Mason
                            </h1>
                            
                            {/* <div className="ml-auto pt-2">
                                <span className="share-btn d-inline-block" style={{ borderRadius: '50%', padding: '10px', cursor: 'pointer' }} data-title="" data-url="" data-rating="" data-overview="">
                                    <img src={shareSvg} alt="share" />
                                </span>
                            </div> */}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
