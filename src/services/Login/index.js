import axios from "axios";

const BASE_URL = 'https://reqres.in/api';

export const Login = (email, password) => {
    return axios.post(`${BASE_URL}/login`, {
        email,
        password
    });
};
