import { AppRootStateType } from "./store"

export const getUser = (state: AppRootStateType) => state.user.user

export const getRepo = (state: AppRootStateType) => state.user.repo

export const getNotFound = (state: AppRootStateType) => state.user.notFound

export const getTotalCount = (state: AppRootStateType) => state.user.totalCount

export const isFetchingValue = (state: AppRootStateType) => state.user.isFetching

export const isFetchingRepo = (state: AppRootStateType) => state.user.isFetchingRepo