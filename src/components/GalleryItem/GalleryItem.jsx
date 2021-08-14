import {useState} from 'react'
function GalleryItem({
    photo
}) { 
let [count, setCount] = useState(0);
const onButtonClick = () => {
    setCount(count+1);
}
    return (
        <>
        
        
        <div className='items'>
            
            <img src={photo.path}/>
        </div>
        <div className='count'>
            <h4>Likes: {count}</h4>
        </div>
        <div className='buttons'>
          
          <button onClick={onButtonClick}>Love It!</button>
          <p>{photo.likes} People ❤️ This</p>
        </div>
    </>
       


    )
}

export default GalleryItem;
