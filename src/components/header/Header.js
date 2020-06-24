import React,{useState} from "react"
import { Link } from "gatsby"
import {Container, Row, Col} from 'reactstrap'

import Nav from "./Nav";
import Search from './Search';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [ menu_open, setMenuOpen] = useState(false);
    const [search_open, setSearchOpen ] = useState(false);

    const toggleMenu = () =>{
        if (search_open) {
            toggleSearch()
        }
        setMenuOpen(open => !open);
        document && document.body.classList.toggle('body--active')
    }

    const toggleSearch = () => {
        if (menu_open) {
            toggleMenu()
        }
        setSearchOpen(open => !open);
        // $('section.home #myTabContent .row').toggleClass('p-t-50')
    }

    return (
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
                                <Nav isOpen={ menu_open }  />

                                {/* search  */}
                                <div className="header__auth">
                                    <button className="header__search-btn" type="button" aria-label="search-icon" onClick={toggleSearch} >
                                        <i className="icon ion-ios-search"></i>
                                    </button>
                                </div>

                                {/* menu  toggler */}
                                <button className={`header__btn${menu_open ? ` header__btn--active` : ''}`} type="button" aria-label="menu toggler" onClick={toggleMenu} >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Search isOpen={search_open} />
        </header>
    );
}

export default Header;