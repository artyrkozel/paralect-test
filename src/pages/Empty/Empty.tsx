import React from "react";
import notFound from '../../common/images/empty.png'

const Empty = () => {
    return(
        <div className="empty">
            <div className="container">
                <div className="empty__inner">
                    <img className="empty__icon" src={ notFound } alt="search-icon"/>
                    <p className="empty__description">
                        Repository list is empty
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Empty