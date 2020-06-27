import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ image, scrollPosition, ...props }) => {
    return(
    <LazyLoadImage
        {...props}
        alt={image.src}
        afterLoad={() => console.log('afterLoadText')}
        beforeLoad={() => console.log('beforeLoadText')}
        className="gallery-img"
        scrollPosition={scrollPosition}
        effect='blur'
        height={image.height ? image.height: "240px"}
        placeholderSrc={'https://res.cloudinary.com/james-m/image/upload/c_thumb,h_240,w_180/v1593129344/party_va3kjs.jpg'}
        src={image.src}
        width={image.width}
        wrapperClassName="gallery-img-wrapper" />
)};

Image.defaultProps = {
    image : {
        alt : 'poster image',
        height: '240px',
        width: '100%',
        src: '',
        caption: ''
    }
}

Image.propTypes = {
    image : PropTypes.object.isRequired
}

export default trackWindowScroll(Image);