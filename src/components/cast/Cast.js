import React from 'react'
import { Col } from 'reactstrap'
import OwlCarousel from 'react-owl-carousel'
import CastCard from './CastCard'

export default function Cast() {
    return (
        <Col xs="12" xl="7">
            <Col xs="12">
                <h2 className="section__title fs-22">Movie Cast</h2>
            </Col>
            <OwlCarousel
                className="owl-theme"
                loop={false}
                margin={10}
                nav={true}
                dots={false}
                responsive={{
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
                }
            >
                <CastCard />
                <CastCard />
                <CastCard />
                <CastCard />
                <CastCard />
            </OwlCarousel>

        </Col>
    )
}
