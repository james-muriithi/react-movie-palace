import React, {useRef, useEffect} from "react";
import PropTypes from 'prop-types';


const Search = ({isOpen}) => {
    const searchInput = useRef(null);
    useEffect(() => {
        isOpen && searchInput.current.focus();
    })
    return (
        <form action="/search/" className={`header__search ${isOpen ? 'header__search--active' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content">
                            <input type="text" id="query" aria-label="search movie or series" ref={searchInput}
                                autoComplete="off" placeholder="Search for a movie, TV Series that you are looking for" name="query" />
                            <button type="submit" aria-label="search" className="text-center">
                                <span>search</span>
                                <i className="icon ion-ios-search fs-24 d-none"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

Search.defaultProps = {
    isOpen: false
}

Search.prototypes = {
    isOpen: PropTypes.bool
}
export default Search;