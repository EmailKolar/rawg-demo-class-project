import axios from "axios";

const apiClient = axios.create({
    //baseURL:"https://api.rawg.io/api",
    baseURL: import.meta.env.VITE_API_URL,
    // params:{
    //     key: import.meta.env.VITE_API_KEY,
    // }
});

export default apiClient;
//import { s } from "framer-motion/dist/types.d-6pKw1mTI";
export interface Response<T> {
    count: number;
    results: T[];
}
