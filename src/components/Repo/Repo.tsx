import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { isFetchingRepo } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import RepoItem from "./RepoItem/RepoItem";
import { RepoPropsType } from "../../types";


const Repo: React.FC<RepoPropsType> = React.memo(( {repo, count, pageCount, onPageChange, currentPage} ) => {

    const isFetching = useSelector(isFetchingRepo)

    return (
        <div className="repo">
            <div className="repo__count">
                {`Repositories (${ count })`}
            </div>
            <div className="repo__wrapper">
                {isFetching
                    ? <Loader/>
                    : repo.map(repo => <RepoItem key={ repo.id } html_url={ repo.html_url } name={ repo.name } description={ repo.description }/>)
                }
            </div>
            <div className="repo__pagination">
                <div className="pagination-counter">
                    { `${count - (count - (currentPage * 4)) - 3}-${count - (count - (currentPage * 4)) > count ? count : count - (count - (currentPage * 4))} of ${count} items` }
                </div>
                <ReactPaginate containerClassName="pagination"
                               pageClassName="pagination__item"
                               pageLinkClassName="pagination__link"
                               previousLabel=''
                               nextLabel=''
                               previousLinkClassName="prev-icon"
                               nextLinkClassName="next-icon"
                               activeClassName="pagination__link--active"
                               initialPage={0}
                               pageCount={pageCount}
                               marginPagesDisplayed={1}
                               pageRangeDisplayed={2}
                               onPageChange={onPageChange}
                />
            </div>
        </div>
    )
})

export default Repo