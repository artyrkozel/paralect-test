import {DataType} from "../types";

export const actions = {
    setIsFetching: (value: boolean) => ({type: 'SET_IS_FETCHING', value} as const),
    setIsFetchingRepo: (value: boolean) =>({type: 'SET_IS_FETCHING_REPO', value} as const),
    setUser: (user: DataType, count: number) => ({type: 'SET_USER', user, count} as const),
    setRepo: (repo: any) => ({type: 'SET_REPO', repo} as const),
    setNotFound: (value: boolean) => ({type: 'NOT_FOUND', value} as const)
}