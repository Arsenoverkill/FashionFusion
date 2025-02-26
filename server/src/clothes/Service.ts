import { logger } from "@/utils/log";
import { PrismaClient } from "@prisma/client";

export class ClothesService {
  private prisma = new PrismaClient();
  async creatClothes(clothes: IClothes) {
    try {
      return await this.prisma.clothes.create({ data: clothes });
    } catch (error) {
      logger.error(error);
      throw new Error("Error creating clothes");
    }
  }
}
