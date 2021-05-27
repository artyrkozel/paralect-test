import React from "react";
import followers from "../../common/images/followers-icon.png";
import following from "../../common/images/following-icon.png";
import { UserPropsType } from "../../types";


const User: React.FC<UserPropsType> = React.memo(( {user} ) => {
    return (
        <div className="user">
            <div className="user__avatar-container">
                <img className="user__avatar" src={ user.avatar_url } alt="avatar"/>
                <div className="user__info">
                    <p className="user__info-name">{ user.name }</p>
                    <a className="user__info-link" href={ user.html_url } target="_blank" rel="noreferrer">{ user.login }</a>
                </div>
            </div>
            <div className="user__info-container">
                <div className="user__profile">
                    <div className="user__profile-item profile-item">
                        <img src={ followers } alt="followers"/>
                        <span className="profile-item-count">{ (user.followers / 1000).toFixed(1) }k followers</span>
                    </div>
                    <div className="user__profile-item profile-item">
                        <img src={ following } alt="following"/>
                        <span className="profile-item-count">{user.following} following</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default User