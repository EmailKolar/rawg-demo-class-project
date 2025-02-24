import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { s } from "framer-motion/dist/types.d-6pKw1mTI";
import useData from "./useData";


export interface Genre{
    id: number;
    name: string;
}
interface GenreResponse{
    count: number;
    results:Genre[];
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;