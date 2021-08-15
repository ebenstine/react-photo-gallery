import React, {useState} from 'react'

import GalleryItem from '../GalleryItem/GalleryItem';
//draws in single image from GalleryItem
function GalleryList({galleryList, retrieveGallery, handleLikes}) {
    
    return (
    <div>
    {galleryList.map((photo) => {
        return (
            <GalleryItem
                
                key={photo.id}
                photo={photo}
                retrieveGallery={retrieveGallery}
                handleLikes={handleLikes}
            />
        );

    })}
    </div>

);

}

export default GalleryList;