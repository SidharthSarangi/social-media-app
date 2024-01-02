import { z } from 'zod'

export const UsernameValidator = z.object({
  name: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[a-zA-Z0-9_]+$/), //regular expression a to z A to Z 0 to 9 is considered valid
})

export type UsernameRequest  = z.infer<typeof UsernameValidator>