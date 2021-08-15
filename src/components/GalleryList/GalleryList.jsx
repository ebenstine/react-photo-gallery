import React, {useState} from 'react'

import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, retrieveGallery, handleLikes}) {
    
    return (
    <div className="flex">
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