import { z } from "zod"

export const usersSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(4)
});
