import React from "react";
import search from '../../common/images/search.png'

const Initial = () => {
    return(
        <div className="initial">
            <div className="container">
                <div className="initial__inner">
                    <img className="initial__icon" src={ search } alt="search-icon"/>
                    <p className="initial__description">
                        Start with searching a GitHub user
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Initial