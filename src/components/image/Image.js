import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ image, scrollPosition, ...props }) => (
    <LazyLoadImage
        {...props}
        alt={image.src}
        afterLoad={() => console.log('afterLoadText')}
        beforeLoad={() => console.log('beforeLoadText')}
        className="gallery-img"
        scrollPosition={scrollPosition}
        effect='blur'
        height={image.height ? image.height: 240}
        placeholderSrc={'https://ucarecdn.com/dc3dad83-e7b5-44cd-841a-dbf4000005d6/-/resize/150x200/-/quality/lightest/party.jpg'}
        src={image.src}
        width={image.width ? image.width : 150}
        wrapperClassName="gallery-img-wrapper" />
);

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