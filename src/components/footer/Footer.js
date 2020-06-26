import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import logo from '../../images/logo.png';
import './Footer.css';

export default function Footer() {
    const getYear =() => {
        const d = new Date();
        return d.getFullYear();
    }
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs="6" md="6" lg="3" >
                        <a href="index.html" className="footer__logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </Col>
                    <Col xs="6" md="6" lg="3" >
                        <ul className="footer__social">
                            <li className="facebook">
                                <a href="https://www.facebook.com/mureiithi.james" rel="noopener  noreferrer" target="_blank" aria-label="facebook icon">
                                    <i className="icon ion-social-facebook"></i>
                                </a>
                            </li>
                            <li className="instagram">
                                <a href="https://twitter.com/jam_es_muriithi" rel="noopener noreferrer" target="_blank" aria-label="instagram icom">
                                    <i className="icon ion-social-instagram"></i>
                                </a>
                            </li>
                            <li className="twitter">
                                <a href="https://facebook.com" rel="noopener noreferrer" target="_blank" aria-label="twiter icon">
                                    <i className="icon ion-social-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg="3" xs="5" className="text-right">
                        <div className="footer__copyright">
                            <span style={{ color: '#ffffff', display: 'inline-block'}}>
                                <span>Powered By:</span>
                                <a target="_blank" href="https://www.themoviedb.org/" rel="noopener noreferrer" aria-label="moviedb">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.34 222.81"><title>PrimaryLogo_Green</title><path className="cls-1" d="M2944.56,2236.34c14.6,0,24.48-9.88,24.48-24.48V2052.58c0-14.6-9.88-24.48-24.48-24.48H2742.19c-14.6,0-24.48,9.88-24.48,24.48v198.33l12.56-14.56h0V2052.58a11.94,11.94,0,0,1,11.92-11.92h202.37a11.94,11.94,0,0,1,11.92,11.92v159.28a11.94,11.94,0,0,1-11.92,11.92H2760.82l-12.56,12.56-0.08-.1" transform="translate(-2717.71 -2028.09)" /><polygon className="cls-1" points="61.38 77.29 68.32 77.29 68.32 49.52 76.96 49.52 76.96 42.63 52.74 42.63 52.74 49.52 61.38 49.52 61.38 77.29" /><polygon className="cls-1" points="99.53 77.29 106.47 77.29 106.47 42.58 99.53 42.58 99.53 56.46 89.14 56.46 89.14 42.58 82.2 42.58 82.2 77.29 89.14 77.29 89.14 63.4 99.53 63.4 99.53 77.29" /><polygon className="cls-1" points="132.25 70.34 119.23 70.34 119.23 63.4 130.35 63.4 130.35 56.46 119.23 56.46 119.23 49.52 131.66 49.52 131.66 42.58 112.28 42.58 112.28 77.29 132.25 77.29 132.25 70.34" /><polygon className="cls-1" points="68.66 101.35 54.97 86.11 52.74 86.11 52.74 121.35 59.78 121.35 59.78 101.98 68.66 111.3 77.54 101.98 77.5 121.35 84.53 121.35 84.53 86.11 82.35 86.11 68.66 101.35" /><path className="cls-1" d="M2825.75,2114.16c-23.88,0-23.88,35.77,0,35.77S2849.63,2114.16,2825.75,2114.16Zm0,28.59c-13.88,0-13.88-21.45,0-21.45S2839.63,2142.75,2825.75,2142.75Z" transform="translate(-2717.71 -2028.09)" /><rect className="cls-1" x="165.37" y="86.65" width="6.94" height="34.7" /><polygon className="cls-1" points="185.07 114.41 185.07 107.47 196.19 107.47 196.19 100.53 185.07 100.53 185.07 93.59 197.5 93.59 197.5 86.65 178.13 86.65 178.13 121.35 198.09 121.35 198.09 114.41 185.07 114.41" /><path className="cls-1" d="M2780.79,2158.81h-10.34v34.7h10.34C2803.89,2193.51,2803.89,2158.81,2780.79,2158.81Zm0,27.76h-3.4v-20.82h3.4C2794.28,2165.75,2794.28,2186.57,2780.79,2186.57Z" transform="translate(-2717.71 -2028.09)" /><path className="cls-1" d="M2824,2176.13c2.18-1.5,3.11-4.22,3.2-6.84,0.15-6.12-3.69-10.53-9.85-10.53h-13.74v34.75h13.74a10.32,10.32,0,0,0,10.24-10.44A8.43,8.43,0,0,0,2824,2176.13Zm-13.4-10.44h6.17a3.51,3.51,0,0,1,0,7h-6.17v-7Zm6.17,20.87h-6.17v-6.94h6.17a3.41,3.41,0,0,1,3.49,3.45A3.45,3.45,0,0,1,2816.77,2186.57Z" transform="translate(-2717.71 -2028.09)" /><polygon className="cls-1" points="144.01 105.38 134.87 86.65 126.86 86.65 143.23 122.08 144.79 122.08 161.15 86.65 153.14 86.65 144.01 105.38" /></svg>
                                </a>
                            </span>
                        </div>
                    </Col>
                    <Col xs="7" md="7" lg="3" className="text-right center" >
                        <span className="footer__credits">
                            © {getYear()} Movie Palace <br /> Created by
                            <a href="https://themeforest.net/user/dmitryvolkov/portfolio?ref=DmitryVolkov" rel="noopener noreferrer" aria-label="owner portfolio" target="_blank">
                                james muriithi
                            </a>
                        </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
