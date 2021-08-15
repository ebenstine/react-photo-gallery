import React, {useState} from 'react'

import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, retrieveGallery}) {
    
    return (
    <div className="flex">
    {galleryList.map((photo) => {
        return (
            <GalleryItem
                retrieveGallery={retrieveGallery}
                key={photo.id}
                photo={photo}
            />
        );

    })}
    </div>

);

}

export default GalleryList;