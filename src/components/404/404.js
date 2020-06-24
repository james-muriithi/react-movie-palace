import React, {useEffect} from 'react'
import {Link} from 'gatsby';

import img from '../../images/404.svg';
import './404.css';

export default function NotFound() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${img})`
    })
    return (
        <div class="page-404 section--bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="page-404__wrap">
                            <div class="page-404__content">
                                <h1 class="page-404__title">404</h1>
                                <p class="page-404__text">The page you are looking for not available!</p>
                                <Link to="/" class="page-404__btn">go back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
