import { Router, Request, Response } from "express";
import { ClothesService } from "./Service";
import { createClothesDto } from "./clothesDto";

const clothesRouter = Router();

const clothesService = new ClothesService();

clothesRouter.get("/", async (req: Request, res: Response) => {
  const clothes = await clothesService.getClothes();
  res.json(clothes);
});

clothesRouter.post("/", async (req: Request, res: Response) => {
  const validation = createClothesDto.safeParse(req.body);

  if (!validation.success) {
    res.status(400).json({ error: validation.error.flatten().fieldErrors });
    return;
  }
  try {
    const clothes = await clothesService.creatClothes(req.body);
    res.status(201).json(clothes);
    return;
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
});

export default clothesRouter;
