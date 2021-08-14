import { useState } from 'react'
function GalleryItem({
    photo
}) {
    let [count, setCount] = useState(0);
    const onButtonClick = () => {
        setCount(count + 1);
        console.log('On Button Click', count);
    }
    return (
        <>
            <div className='items'>

                <img src={photo.path} />
            </div>
            
            
            <div className='buttons'>

                <button onClick={onButtonClick}>Love It!</button>

            </div>
            <div className='count'>
                <h4>{count} People ❤️ This</h4>
            </div>
        </>



    )
}
export default GalleryItem;
