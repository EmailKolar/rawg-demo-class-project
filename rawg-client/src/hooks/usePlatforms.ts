import { useQuery } from "@tanstack/react-query";

import { Response } from "../services/api-client";
import ApiClient from "../services/api-client";
import platforms from "../data/platforms";


export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms");

const usePlatforms = () => useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    cacheTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
});

export default usePlatforms;