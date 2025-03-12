import { Router } from "express";
import { Store } from "../entities/Store";
import { AppDataSource } from "../startup/data-source";

interface Response{
    count: number;
    results: Store[];
}

const storeRouter = Router();
const storeRepositry = AppDataSource.getRepository(Store);

storeRouter.get("/", async (req, res) => {
    const stores = await storeRepositry.find();
    const response: Response = {
        count: stores.length,
        results: stores,
    };
    res.json(response);
});

export default storeRouter;