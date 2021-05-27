import React from "react";
import notFound from '../../common/images/not-found.png'

const Empty = () => {
    return(
        <div className="empty">
            <div className="container">
                <div className="initial__inner">
                    <img className="initial__icon" src={ notFound } alt="search-icon"/>
                    <p className="initial__description">
                        Repository list is empty
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Empty