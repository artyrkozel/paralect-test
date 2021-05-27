import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotFound, getRepo, getTotalCount, getUser, isFetchingValue } from "../../redux/selectors";
import { Redirect, useHistory } from "react-router-dom";
import User from "../User/User";
import Empty from "../../pages/Empty/Empty";
import Repo from "../Repo/Repo";
import { requestRepo, requestUser } from "../../redux/user-reducer";
import Loader from "../Loader/Loader";


const Main = () => {
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ initialize, setInitialize ] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector(getUser)
    const repo = useSelector(getRepo)
    const notFound = useSelector(getNotFound)
    const history = useHistory()
    const isFetching = useSelector(isFetchingValue)
    const totalCount = useSelector(getTotalCount)

    const onPageChange = ({ selected }: { selected: number }) => setCurrentPage(selected + 1)

    const pageCount = Math.ceil(totalCount / 4 )

    useEffect(() => {
        dispatch(requestRepo(user.login, currentPage))
    }, [currentPage, user.login, dispatch])

    useEffect(() => {
        const user = localStorage.getItem('user')
        const page = localStorage.getItem('page')
        if (user && page) {
            dispatch(requestUser(JSON.parse(user)))
            dispatch(requestRepo(JSON.parse(user), JSON.parse(page)))
            setInitialize(true)
        }
    }, [dispatch])

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            history.push({
                pathname: `/user/${ JSON.parse(user) }/page=${ currentPage }`
            })
        }
    }, [currentPage, history])

    if (isFetching) return <Loader/>
    if (notFound && initialize) return <Redirect to={ '/not-found' }/>
    return (
        <div className="main">
            <div className="container">
                <div className="main__inner">
                    <User user={ user }/>
                    {repo.length !== 0
                        ? <Repo repo={ repo } count={ totalCount } pageCount={ pageCount } onPageChange={ onPageChange } currentPage={ currentPage }/>
                        : <Empty/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Main