import axios from "axios";
import {DataType, ResponseType} from "../types";

export const gitApi = {
    getUser(userName: string) {
        let promise = axios.get<DataType>(`https://api.github.com/users/${userName}`)
        return promise
    },
    getRepo(userName: string, page: number){
        let promise = axios.get<ResponseType<any>>(`https://api.github.com/users/${userName}/repos?per_page=4&page=${page}`)
        return promise
    }
}



