import React from 'react';
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const Nav = ({isOpen}) => (
    <ul className={`header__nav ml-auto ${isOpen ? 'header__nav--active' : ''}`}>
        <li className="header__nav-item active">
            <Link to="/" className="header__nav-link active" >Home</Link>
        </li>
        <li className="header__nav-item">
            <Link to="/movies" className="header__nav-link" >Movies</Link>
        </li>
        <li className="header__nav-item">
            <Link to="/tv-shows" className="header__nav-link" >TV Shows</Link>
        </li>

        {/* <li className="dropdown header__nav-item">
            <Link className="dropdown-toggle header__nav-link header__nav-link--more" to="#" aria-label="more" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="icon ion-ios-more"></i>
            </Link>

            <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                <li><Link to="/about">About</Link></li>
            </ul>
        </li> */}
    </ul>
);

Nav.defaultProps = {
    isOpen: false
}

Nav.prototypes = {
    isOpen: PropTypes.bool
}

export default Nav;