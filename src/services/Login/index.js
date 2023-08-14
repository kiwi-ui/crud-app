import axios from "axios";
import { environment } from "../../environment";

export const Login = (email, password) => {
    return axios.post(`${environment}/login`, {
        email,
        password
    });
};
