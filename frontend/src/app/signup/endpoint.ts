import axios from "axios";

export const postSignup = (username: string, password: string) => {
    const req = {
        username,
        password,
    };
    //return axios.post("", req)
    return { status:200 }
}