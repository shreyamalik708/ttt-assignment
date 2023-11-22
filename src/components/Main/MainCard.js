import React, { useState } from "react";
import './MainCard.css';
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function MainCard() {
    const [isLiked, setIsLiked] = useState(false);

    function handleLike() {
        if (isLiked === true) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    }

    return (
        <div className="main_card_container">
            <div>
                <div className="like_container">
                    <div className="like-icon" onClick={handleLike}>
                        {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MainCard;