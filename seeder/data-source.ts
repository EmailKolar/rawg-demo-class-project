import "reflect-metadata";
import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { Store } from "./entities/Store";
import { ParentPlatform } from "./entities/ParentPlatform";
import "dotenv/config";
import { Publisher } from "./entities/Publisher";

const connectionString = process.env.MYSQL_URL;

export const AppDataSource = new DataSource({
  type: "mysql",
  url: connectionString,
  // host: "localhost",
  // port: 3307,
  // username: "root", // Change to your MySQL username
  // password: "123456", // Change to your MySQL password
  // database: "rawg-db",
  synchronize: true, // Set to false in production and use migrations instead
  logging: true,
  entities: [Game, Genre, Store, ParentPlatform, Publisher],
  migrations: [],
  subscribers: [],
});

/*
// Initialize the data source
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
*/