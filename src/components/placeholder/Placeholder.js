import React from 'react'
import ContentLoader from "react-content-loader";

export default function Placeholader(props) {
    const imageHeight = 190

    return (
        <div className="card">
            <div className="card__cover">
                <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(0, 0, 0, 0.1)" height={`${imageHeight}px`} style={{ width: "100%" }}>
                    <rect x="20" y="0" rx="5" ry="5" style={{ width: "100%" }} />
                </ContentLoader>
            </div>
            <div className="card__content">
                <div className="d-flex align-items-center" >
                    <h3 className="card__title">
                        <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(0, 0, 0, 0.1)" height="10px" style={{ width: "100%" }}>
                            <rect x="0" y="0" rx="5" ry="5" style={{ height: "10px", width: "100%" }} />
                        </ContentLoader>
                    </h3>
                </div>
                <span className="card__category">
                    <span>

                    </span>
                </span>
                <div className="card__wrap">

                    <ul className="card__list">
                        <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(0, 0, 0, 0.1)" style={{ height: '30px', width: '100%' }}>
                            <rect x="0" y="0" rx="5" ry="5" width="250" height="5px" style={{ width: "100%" }} />
                            <rect x="0" y="10" rx="5" ry="5" width="250" height="5px" style={{ width: "100%" }} />
                        </ContentLoader>
                    </ul>
                </div>

            </div>
        </div>

    )
}