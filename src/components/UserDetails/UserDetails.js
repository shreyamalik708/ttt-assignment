import React from "react";
import './UserDetails.css';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PreviewIcon from '@mui/icons-material/Preview';

function UserDetails() {
    return (
        <div>
            <div>
                <div class="container-main">
                    <div class="user-container-main">
                        <div class="user-image"></div>
                        <div class="user-info">
                            <div><h1>Anuj Gosalia</h1></div>
                            <div class="user-details">
                                <div>
                                    <button>6482</button>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <button>245</button>
                                    <p>Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="user-container-description">
                    <div>
                        <p>Co-founder & CEO at Terribly Tiny Tales</p>
                        <a href="http://www.instagram.com/anujgosalia">http://www.instagram.com/anujgosalia</a>
                    </div>

                    <div class="icons">
                        <div>
                            <StarPurple500Icon />125
                        </div>
                        <div>
                            <ThumbUpIcon />12
                        </div>
                        <div>
                            <FavoriteTwoToneIcon />57.8K
                        </div>
                        <div>
                            <PreviewIcon />26.0K
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserDetails;