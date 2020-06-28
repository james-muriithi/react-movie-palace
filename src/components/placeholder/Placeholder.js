
import React from "react"

import ContentLoader from "react-content-loader"
import { Col } from "reactstrap"

const Placeholader = () => (
    <Col xs="6" lg="6" sm="12" className="w-100" >
        <ContentLoader speed={2} backgroundColor="transparent" foregroundColor="rgba(255, 255, 255, 0.1)" width="100%">
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="7" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="30" rx="3" ry="3" width="250" height="10" />
            <rect x="80" y="53" rx="3" ry="3" width="240" height="7" />
        </ContentLoader>
    </Col>
)

export default Placeholader