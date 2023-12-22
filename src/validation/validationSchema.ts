import { z } from "zod";

export const ValidationSchema = z.object({
  name: z.string().min(3, "Name should be minimum 3 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject should be minimum 3 characters"),
  body: z.string().min(3, "Password should be minimum 3 characters"),
});
