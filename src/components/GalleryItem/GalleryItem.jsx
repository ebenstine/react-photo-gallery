import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';



function GalleryItem({
    photo, retrieveGallery, handleLikes
}) {
    /*let [count, setCount] = useState(0);
    const onButtonClick = () => {
        setCount(count + 1);
        console.log('On Button Click', count);*/

const [isHidden, setIsHidden] = useState(false);
const handleFlip = () => {
    if (isHidden) {
        setIsHidden(false);
    } else {
        setIsHidden(true);
    }
};


//button clicks

return (
    <>
        <div className="listItem centerPadding">
            {isHidden ? (
                <p onClick={handleFlip}>{photo.description}</p>
            ) : (
                <img onClick={handleFlip} src={photo.path} />
                
            )}
        <div
            className="button">
             <button onClick={() => handleLikes(photo.id)}>❤️</button>

            <p>{photo.likes} People ❤️ This</p>
           </div> 
        </div>
</>

    



);


}
export default GalleryItem;
