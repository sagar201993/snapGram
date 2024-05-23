import * as z from "zod";

export const signupValidation = z.object({
  name: z.string().min(2, {
    message: "Too short",
  }),
  username: z.string().min(2, {
    message: "Too short",
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must atlease 8 characters" }),
});
