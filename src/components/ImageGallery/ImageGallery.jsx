import PropTypes from 'prop-types';
import React from "react"
import css from './ImageGallery.module.css'

function ImageGallery({ images, onImgClick }) {
return (
        <ul className={css.imageGallery}>
            {images.map(({ tags, largeImageURL, webformatURL, id }) =>
                <li key={id} onClick={() => onImgClick(largeImageURL) }>                    
                    <img className={css.image} src={webformatURL} alt={tags} />            
                </li>
            )}
        </ul>
)}
export default ImageGallery;

ImageGallery.propTypes = {
    onImgClick: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
};