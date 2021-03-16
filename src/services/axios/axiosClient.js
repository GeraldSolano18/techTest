
import axios from "axios";

export const requestData = ({method, url, params}) => {
    // console.log('key', process.env.GATSBY_PUBLIC_KEY)
    let paramsInit = {
        apikey: process.env.GATSBY_PUBLIC_KEY,
    }
    return axios({
        method: method || "GET",
        baseURL: `${process.env.GATSBY_API_URL}`,
        url: url || "",
        params: {
            ...paramsInit,
            ...params
        }
    })
}