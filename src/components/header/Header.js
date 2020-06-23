import React from "react"
import { Link } from "gatsby"
import {Container, Row, Col} from 'reactstrap'

import Nav from "./Nav";
import Search from './Search';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header__wrap">
            <Container>
                <Row>
                    <Col>
                        <div className="header__content">
                            {/* logo */}
                            <Link to="/" className="header__logo">
                                <img src={logo} alt="logo" loading="lazy" className="mb-0" />
                            </Link>
                            {/* nav */}
                            <Nav/>

                            {/* search  */}
                            <div className="header__auth">
                                <button className="header__search-btn" type="button" aria-label="search-icon">
                                    <i className="icon ion-ios-search"></i>
                                </button>
                            </div>

                            {/* menu  toggler */}
                            <button className="header__btn" type="button" aria-label="menu toggler">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Search />
    </header>   
);

export default Header;