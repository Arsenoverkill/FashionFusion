import { Clothes, PrismaClient } from "@prisma/client";
import { logger } from "@/utils/log";

export class ClothesService {
  private prisma = new PrismaClient();
  async getClothes(): Promise<Clothes[]> {
    try {
      return await this.prisma.clothes.findMany();
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }
  async creatClothes(clothes: IClothes) {
    try {
      return await this.prisma.clothes.create({ data: clothes });
    } catch (error) {
      logger.error(error);
      throw new Error("Error creating clothes");
    }
  }
  async deleteClothes(id: string): Promise<Clothes> {
    try {
      return await this.prisma.clothes.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      logger.error(error);
      throw new Error("Failed to delete twit");
    }
  }
  async editClothes(id: string, data: Partial<Clothes>): Promise<Clothes> {
    try {
      return await this.prisma.clothes.update({
        where: {
          id: id,
        },
        data: data,
      });
    } catch (error) {
      logger.error(error);
      throw new Error("Failed to update twit");
    }
  }
}
