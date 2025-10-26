import {useState} from 'react';

export default function LikeButton() {

    let [isLiked, setLiked] = useState(false);
    let [clicks, setClicks] = useState(0);

    let toggleLike = () => {
        let newValue = !isLiked;
        setLiked(newValue);
        setClicks(clicks + 1);
    };

    // let likeStyle = { };
    
    return (
        <div>
            <p>Clicks: {clicks}</p>
            <p onClick={toggleLike}>
                {(isLiked ? ( 
                        <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
                    ) : (
                        <i className="fa-regular fa-heart"></i>
                    )
                )} 
            </p>
        </div>
    );
}