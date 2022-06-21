import axios from "axios";
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL: "",
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (req) => {
    if(!req.url.includes("/api/login")   && !req.url.includes("/api/refister") && !req.url.includes("/api/selling") && !req.url.includes("/api/book")){
        req.headers['Authorization'] ="Bearer " + localStorage.getItem('accessToken');

        return req;
    }
    
    return req;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => { throw error; });

export default axiosClient;