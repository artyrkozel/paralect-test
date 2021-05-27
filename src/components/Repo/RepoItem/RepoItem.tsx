import React from "react";
import { RepoItemType } from "../../../types";


const RepoItem: React.FC<RepoItemType> = React.memo(( {name, description, html_url, id} ) => {
    return (
        <div className="repo__item repo-item" key={ id }>
            <div className="repo-item__title">
                <a className="repo-item__link" href={ html_url } target="_blank" rel="noreferrer">{ name }</a>
            </div>
            <div className="repo-item__description">
                { description }
            </div>
        </div>
    )
})

export default RepoItem
