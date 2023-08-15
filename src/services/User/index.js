import axios from "axios"
import { environment } from "../../environment"

export const User = (pages) =>  {
    return axios.get(`${environment.apiUrl}/users?page=${pages}`)
};

export const SingleUser = (id) =>  {
    return axios.get(`${environment.apiUrl}/users/${id}`)
};
