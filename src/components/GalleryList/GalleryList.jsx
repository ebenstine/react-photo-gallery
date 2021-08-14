import React from 'react'
import {useState} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, retrieveGallery}) {
    

    

    
    return (
       
       <div>
            <div>
                {galleryList.map((photo)=>
                    <ul >
                    <GalleryItem 
                        
                        key={photo.id}
                        photo={photo}
                        retrieveGallery={retrieveGallery}
                        />
                    </ul>
                    
                    
                    
                )}
            </div>
        </div>
        
    )
}

export default GalleryList
