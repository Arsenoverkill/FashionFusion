import express from "express";
import clothesRouter from "./clothes/Controller";

const app = express();

async function main() {
  app.get("/fashion", clothesRouter);
}
