import axios from "axios";

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_REAL_ESTATE_API,
    headers: {
        "content-type": "application/json",
    },
});

export const axiosMultiPartClient = axios.create({
    baseURL: process.env.REACT_APP_REAL_ESTATE_API,
    headers: {
        "content-type": "multipart/form-data",
    },
});