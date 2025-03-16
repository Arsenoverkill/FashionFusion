import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import clothesRouter from "./clothes/Controller";
import { PrismaClient } from "@prisma/client";
import { logger } from "./utils/log";

dotenv.config();

const app = express();

export const prisma = new PrismaClient();

async function main() {
  app.use(express.json());

  app.use("/api/fashion", clothesRouter);

  app.get("/error", (req, res) => {
    throw new Error("This is test error");
  });

  app.all("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);
    res.status(500).send("Something went wrong");
  });

  app.listen(process.env.PORT || 4200, () => {
    logger.info(`Server listening on port ${process.env.PORT || 4200}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
