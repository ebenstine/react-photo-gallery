import axios from 'axios';
import { useState } from 'react';
import React from 'react';



function GalleryItem({
    photo, retrieveGallery
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

const likePhoto = (photo) => {
    console.log(photo);
    
    axios
        .put ('/gallery/like/:id')
        .then((response) => {
            console.log(response);
            console.log("response.data", response.data);
            retrieveGallery();
        }).catch((error) => {
            console.log('Error in put', error);
        });
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
             <button onClick={likePhoto}>❤️</button>

            <p>{photo.likes} People ❤️ This</p>
           </div> 
        </div>
</>

    



);


}
export default GalleryItem;
