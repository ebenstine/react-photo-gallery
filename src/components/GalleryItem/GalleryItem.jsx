import "./GalleryItem.css";
import { useState, useEffect } from 'react';
import React from 'react';

//function that details a single image
function GalleryItem({
    photo, handleLikes
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
            <div className="switcheroo">
            {isHidden ? 
                <p className="description" onClick={handleFlip}>{photo.description}</p>
                : 
                <img className="image" onClick={handleFlip} src={photo.path}></img>
                  
            }           
            </div> 
            
            <br></br>
            
            <button className="button" onClick={() => handleLikes(photo.id)}>❤️</button>
            
           
            <p>Hey! {photo.likes} People Like This</p>
            
        
        
        </>     



 

    );


}
export default GalleryItem;
