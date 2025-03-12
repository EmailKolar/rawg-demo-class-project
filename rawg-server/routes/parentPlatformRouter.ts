import { Router } from "express";
import { ParentPlatform } from "../entities/ParentPlatform";
import { AppDataSource } from "../startup/data-source";

interface Response{
    count: number;
    results: ParentPlatform[];
}

const parentPlatformRouter = Router();
const parentPlatformRepository = AppDataSource.getRepository(ParentPlatform);

parentPlatformRouter.get("/", async (req, res) => {
    const parentPlatforms = await parentPlatformRepository.find();
    const response: Response = {
        count: parentPlatforms.length,
        results: parentPlatforms,
    };
    res.json(response);
});

export default parentPlatformRouter;