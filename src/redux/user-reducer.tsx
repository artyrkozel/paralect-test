import {gitApi} from "../api/api";
import {ActionsTypes, DataType, ThunkType} from "../types";
import {actions} from "../actions/actions";

export type InitialType = typeof initialState

let initialState = {
    isFetching: false,
    isFetchingRepo: false,
    user: {} as DataType || {},
    repo: [] as Array<any>,
    notFound: false,
    totalCount: 0
}

const userReducer = (state: InitialType = initialState, action: ActionsTypes): InitialType => {

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
                totalCount: action.count
            }
        case "SET_REPO":
            return {
                ...state,
                repo: action.repo
            }
        case "SET_IS_FETCHING":
            return {
                ...state,
                isFetching: action.value
            }
        case "SET_IS_FETCHING_REPO":
            return {
                ...state,
                isFetchingRepo: action.value
            }
        case "NOT_FOUND":
            return {
                ...state,
                notFound: action.value
            }
        default:
            return state
    }
}

export default userReducer


//Thunks

export const requestUser = ( user: string ): ThunkType => {
    return async (dispatch ) => {
        try {
            dispatch(actions.setIsFetching(true))
            const userData = await gitApi.getUser(user)
            dispatch(actions.setUser(userData.data, userData.data.public_repos))
            localStorage.setItem('user', JSON.stringify(userData.data.login))
            dispatch(actions.setIsFetching(false))
        } catch (e) {
            if(e.message === 'Request failed with status code 404'){
                dispatch(actions.setIsFetching(false))
                dispatch(actions.setNotFound(true))
            }
        }
    }
}

export const requestRepo = ( user: string, page: number ): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.setIsFetchingRepo(true))
            const userDataJson = await gitApi.getRepo(user, page)
            dispatch(actions.setRepo(userDataJson.data))
            dispatch(actions.setIsFetchingRepo(false))
            localStorage.setItem('page', JSON.stringify(page))
        } catch (e) {
            dispatch(actions.setIsFetchingRepo(false))
        }
    }
}

