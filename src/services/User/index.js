import axios from "axios"
import { environment } from "../../environment"

export const User = () =>  {
    return axios.get(`${environment.apiUrl}/users`)
};
