import axios from "axios";

export const requestData = ({method, url, params}) => {
    // console.log('key', process.env.GATSBY_PUBLIC_KEY)
    let paramsInit = {
        apikey: "d497257b9e1bfc1f8b42246f2a61fb78",
    }
    return axios({
        method: method || "GET",
        baseURL: `https://gateway.marvel.com/v1/public`,
        url: url || "",
        params: {
            ...paramsInit,
            ...params
        }
    })
}