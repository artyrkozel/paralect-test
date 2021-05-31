import {ThunkAction} from "redux-thunk";
import {AppRootStateType, InferActionsTypes} from "./redux/store";
import {actions} from "./actions/actions";

export type ThunkType = ThunkAction<Promise<void>, AppRootStateType, any, ActionsTypes>
export type ActionsTypes = InferActionsTypes<typeof actions>

export type DataType = {
    avatar_url: string
    bio: null | string
    blog: string
    company: string
    created_at: string
    email: null | string
    events_url: string
    followers: number
    followers_url: string
    following: number
    following_url: string
    gists_url: string
    gravatar_id: string
    hireable: null | string
    html_url: string
    id: number
    location: null | string
    login: string
    name: string
    node_id: string
    organizations_url: string
    public_gists: number
    public_repos: number
    received_events_url: string
    repos_url: string
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    twitter_username: string
    type: string
    updated_at: string
    url: string
}
export type RepoPropsType = {
    repo: Array<any>,
    count: number,
    pageCount: number,
    onPageChange: ({selected}: { selected: number }) => void,
    currentPage: number
}
export type UserPropsType = {
    user: DataType
}
export type ResponseType<T> = {
    config: any
    data: T
    headers: any
    request: any
    status: number
    statusText: string
}
export type RepoItemType = {
    html_url: string
    name: string
    description: string
}
