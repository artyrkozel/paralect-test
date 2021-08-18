import React from "react";
import { actions } from "../actions/actions";
import { DataType } from "../types";
import userReducer, { InitialType } from "./user-reducer";

let state: InitialType;

beforeEach(() => {
    state = {
        isFetching: false,
        isFetchingRepo: false,
        user: {} as DataType || {},
        repo: [] ,
        notFound: false,
        totalCount: 0
    }
})

test("Fetching is changed", () => {
    const newState = userReducer(state, actions.setIsFetching(true))
    expect(newState.isFetching).toBeTruthy();
})

test("Fetching value for repos should change", () => {
    const newState = userReducer(state, actions.setIsFetchingRepo(true))
    expect(newState.isFetchingRepo).toBeTruthy();
    expect(newState.notFound).toBeFalsy()
})

test("repositories should be added to state", () => {

    let repos = [
        {html_url: 'www', name: 'repo1', description: 'repo item1'},
        {html_url: 'sss', name: 'repo2', description: 'repo item2'},
        {html_url: 'ggg', name: 'repo3', description: 'repo item3'}
    ]

    const newState = userReducer(state, actions.setRepo(repos))
    expect(newState.repo.length).toBe(3);
    expect(newState.repo[1].name).toBe('repo2');
})

test("Users should be added", () => {
    let user = {
        avatar_url: 'google.com',
        name: 'user1',
        html_url: 'https://www.google.com/search?q=google&rlz=1C1IXYC_ruBY956BY956&oq=google&aqs=chrome..69i57j46i67i131i199i433i465j69i59j35i39j0i67j0i67i131i433j69i60l2.1007j0j7&sourceid=chrome&ie=UTF-8',
        followers: 100,
        following: 66
    } as DataType

    const newState = userReducer(state, actions.setUser(user, 10))
    expect(newState.user.name).toBe('user1')
    expect(newState.totalCount).toBe(10)
    expect(newState.notFound).toBeFalsy()
})

test("NotFound page value should switce to true", () => {

    const newState = userReducer(state, actions.setNotFound(true))
    expect(newState.notFound).toBeTruthy()
    expect(newState.isFetchingRepo).toBeFalsy()

})