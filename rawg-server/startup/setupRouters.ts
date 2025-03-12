import genreRouter from '../routes/genreRouter';
import gameRouter from '../routes/gameRouter'; // Add this line
import parentPlatformRouter from '../routes/parentPlatformRouter'; // Add this line
import storeRouter from '../routes/storeRouter'; // Add this line
import express, { Express } from 'express';

const setupRouters = (app: express.Application) => {
    app.use("/genres", genreRouter);
    app.use("/games", gameRouter);
    app.use("/platforms/lists/parents", parentPlatformRouter);
    app.use("/stores", storeRouter);
};

export default setupRouters;