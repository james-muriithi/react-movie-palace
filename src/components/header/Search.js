import React from "react";

const Search = () => (
    <form action="/search/" className="header__search">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header__search-content">
                        <input type="text" id="query" aria-label="search movie or series" 
                            autocomplete="off" placeholder="Search for a movie, TV Series that you are looking for" name="query" />
                        <button type="submit" aria-label="search">search</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
)

export default Search;