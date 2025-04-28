import { useQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../../services/api-client";
import platforms from "./platforms";

import { Platform } from "./Platform";
const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: platforms,
  });
export default usePlatforms;