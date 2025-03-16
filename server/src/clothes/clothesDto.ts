import { z } from "zod";

export const createClothesDto = z.object({
  title: z.string().min(3, "Title is required").max(100, "Title is too long"),
  price: z.number().positive("Price must be a positive number"),
  image: z.string().url("Invalid image URL"),
  imageHover: z.string().url("Invalid hover image URL"),
  description: z
    .string()
    .min(10, "Description is too short")
    .max(500, "Description is too long"),
  size: z.array(z.number()).nonempty("Size array cannot be empty"),
  sizeProduct: z
    .number()
    .int("Size product must be an integer")
    .positive("Size product must be positive"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .min(0, "Quantity cannot be negative"),
  quintity: z
    .number()
    .int("Quintity must be an integer")
    .min(0, "Quintity cannot be negative"),
  category: z
    .string()
    .min(3, "Category is required")
    .max(50, "Category is too long"),
});
