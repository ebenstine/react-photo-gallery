import "./GalleryItem.css";
import { useState, useEffect } from 'react';
import React from 'react';

//function that details a single image
function GalleryItem({
    photo, retrieveGallery, handleLikes
}) {
    //provides logic for the display switch with conditional states    
    const [isHidden, setIsHidden] = useState(false);
    const handleFlip = () => {
        if (isHidden) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    };
//quick method is setIsHidden(!isHidden) 
// if it's true, make it false is the nature of toggling
//or to making one thing into something else
    
//details button click actions and DOM info

    return (
        <>
            <div className="listItem">
                {isHidden ? (
                    <p className="description fade-in" onClick={handleFlip}>{photo.description}</p>
                ) : (
                    <img onClick={handleFlip} src={photo.path} />

                )}
                <div
                    className="countUp">
                    <button className="button" onClick={() => handleLikes(photo.id)}>❤️</button>

                    <p>Hey! {photo.likes} People ❤️ This</p>
                </div>
            </div>
        </>



 

    );


}
export default GalleryItem;
