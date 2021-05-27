import React from "react";
import notFound from '../../common/images/not-found.png'

const NotFound = () => {
    return(
        <div className="initial">
            <div className="container">
                <div className="initial__inner">
                    <img className="initial__icon" src={ notFound } alt="search-icon"/>
                    <p className="initial__description">
                        User not found
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound