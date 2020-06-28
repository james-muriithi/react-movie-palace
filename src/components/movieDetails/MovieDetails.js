import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Container} from 'reactstrap';
import ColorThief from "colorthief";
import styled from 'styled-components';
import tinycolor from 'tinycolor2'

import Img from '../image/Image';
import SEO from '../seo/Seo';
import shareSvg from '../../images/share.svg';
import Like from '../favourite/Like';
import placeholderSrc from '../../images/posterplaceholder_gm4xhm.jpg';
import './MovieDetails.css'

function MovieDetails({movie}) {
    const globalWindow = typeof window !== 'undefined' && window;
    const [ colorArrays, setColorArrays ] = useState([]);
    const [gradientColors, setGradientColors] = useState([
        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 212, 255, 0)'
    ]);
    const [height, setHeight] = useState(600);

    const ImageEndpoint = 'https://image.tmdb.org/t/p/w200';
    const backdropEndpoint = 'https://image.tmdb.org/t/p/original'

    const imageSrc = movie.poster_path ? `${ImageEndpoint}${movie.poster_path}` : placeholderSrc
    const backdropSrc = `${backdropEndpoint}${movie.backdrop_path}`

    function getColorArrays() {
        const colorThief = new ColorThief();
        const img = new Image();

        img.crossOrigin = 'Anonymous';
        img.src = imageSrc

        setColorArrays(colorThief.getColor(img));
        const palette = colorThief.getPalette(img, 3)
        const opacities = [ '1', '0.5', '0' ]
        let myArray = []
        palette.map((item, index) => myArray.push(rgba(item, opacities[ index ])))
        setGradientColors(myArray)
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    function rgba(values, opacity=1) {
        return typeof values === "undefined" ? null : `rgba(${values.join(', ')}, ${opacity})`;
    }
    
    function changeThemeColor(color) {
        var metaThemeColor = document.querySelector("meta[name=theme-color]");
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", color);
        }
    }

    useEffect(() => {

        // change meta theme
        if (colorArrays.length > 0) {
            const hex = tinycolor(rgb(colorArrays)).darken().toHexString();
            changeThemeColor(hex);
        }
        
        const handleScroll = () =>{
            const header = document.querySelector('.movie-header');
            if (globalWindow && globalWindow.pageYOffset > 430 && header) {
                header.style.background = `${colorArrays.length > 0 ? rgb(colorArrays) : '#2b2b31'}`;
            } else if (header) {
                header.style.background = 'transparent';
            }
        }
        const handleResize = () => {
            setHeight(globalWindow.innerHeight)
        }
        
        handleResize()
        handleScroll();
        
        globalWindow && globalWindow.addEventListener('scroll', handleScroll)
        globalWindow && globalWindow.addEventListener('resize', handleResize);
    })

    const BgDiv = styled.div`
        height: ${(props) => props.height}px;
        background: ${(props) => props.background};`

    return (
        <>
            <SEO 
            title={`${movie.title}-Movie Palace`} 
            banner={movie.poster_path ? imageSrc : ''}
            pathname={`/movie/${movie.id}`}
            desc={movie.overview} />
            <BgDiv
                className="details__bg"
                data-bg=""
                height={height}
                background={`linear-gradient(to right top, ${gradientColors[ 0 ]} 10%,${gradientColors[ 0 ]} 30%, ${gradientColors[ 2 ]} 50%), url("${backdropSrc}") center center / cover no-repeat`}
            />
            <Container>
                <Row>
                    <Col xl="12" >
                        <div className="card card--details card--series" style={{ minHeight: height }} >
                            <Row>
                                <Col xs="12" sm="4" lg="3" >
                                    <div className="card__cover my-card" onLoad={() => getColorArrays()} >
                                        <Img
                                            crossOrigin="anonymous"
                                            image={{ width: '100%', height: '100%', src: imageSrc }} />
                                        <span className="card__rate card__rate--green">{movie.vote_average}</span>
                                    </div>
                                </Col>
                                <Col xs="12" sm="8" lg="9">
                                    <div className="card__content my-card">
                                        <Col xs="12" className="p-l-0">
                                            <h1 className="details__title">
                                                {movie.title}
                                            </h1>
                                        </Col>
                                        <div className="card__wrap">
                                            <ul className="card__list single">
                                                <li>HD</li>
                                                {movie.adult && <li>18+</li>}
                                                <li className="like" >
                                                    <Like />
                                                </li>
                                                <li className="share-btn" style={{ borderRadius: '50%', padding: '10px', cursor: 'pointer' }} data-title="" data-url="" data-rating="" data-overview="">
                                                    <img src={shareSvg} alt="share" />
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="card__meta">
                                            <li className="genre">
                                                <span>Genre:</span>
                                                {movie.genres && movie.genres.join(', ')}
                                            </li>
                                            <li>
                                                <span>Release date: </span>
                                                {movie.release_date}
                                            </li>
                                            <li>
                                                <span>Running time: </span>
                                                {movie.release_date}
                                            </li>
                                            {movie.production_countries && <li>
                                                <span>Country: </span>
                                                {movie.production_countries.join(', ')}
                                            </li>}

                                        </ul>
                                        <div className="card__description card__description--details">
                                            {movie.overview}
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

