import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import thunkMiddleware  from 'redux-thunk'

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes<T extends {[key: string] : (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
export type AppRootStateType =  ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    user: userReducer
})

let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store
