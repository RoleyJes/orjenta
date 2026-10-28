import { z } from "zod";

export const clientFormSchema = z.object({
  name: z.string().trim().min(1, "Client name is required"),
  company: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  industry: z.string().trim().optional(),
  notes: z.string().trim().optional(),
});

export type ClientFormData = z.infer<typeof clientFormSchema>;
