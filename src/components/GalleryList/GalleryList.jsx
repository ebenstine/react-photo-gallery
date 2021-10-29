import React, {useState} from 'react'

import GalleryItem from '../GalleryItem/GalleryItem';
//draws in single image from GalleryItem
function GalleryList({galleryList, retrieveGallery, handleLikes}) {
    
    return (
    <>
    {galleryList.map((photo) => {
        return (
            <GalleryItem
                
                key={photo.id}
                photo={photo} // think of how to make these say better what they're actually doing
                retrieveGallery={retrieveGallery} //these would make more sense as "onPhoto, or onRetrieveGallery"
                handleLikes={handleLikes} //this means ON HANDLELIKES, give me this info, DON'T MATCH THEM LIKE THIS,  no need to confuse yourself
                                          
            />
        );

    })}
    </>

);

}

export default GalleryList;