import { z } from "zod";

export const createClothesDto = z.object({
  text: z.string().min(1, "Text is required").max(280),
});
