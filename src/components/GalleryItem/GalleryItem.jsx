import { useState } from 'react'
function GalleryItem({
    photo
}) {
    const [isHidden, setIsHidden] = useState(false);
    let [count, setCount] = useState(0);
    const onButtonClick = () => {
        setCount(count + 1);
        console.log('On Button Click', count);
    }
    const handleFlip = () => {
        if (isHidden) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    };

    return (
        <>
            <div className="listItem centerPadding">
                {isHidden ? (
                    <p onClick={handleFlip}>{photo.description}</p>
                ) : (
                    <img onClick={handleFlip} src={photo.path} />
                )}
                <button
                    className="button"
                    variant="outlined"
                    color="secondary"
                    onClick={handleLikes}
                >
                    ❤️
                </button>

                <p>{gallery.likes} People ❤️ This</p>
            </div>
            );

        </>



    )
}
export default GalleryItem;
