import { z } from "zod";

export const LoanCalculatorSchema = z.object({
  totalAmount: z
    .string()
    .transform((val) => parseFloat(val)) // Convert string to number
    .refine((val) => !isNaN(val), {
      message: "Total amount must be a valid number",
    })
    ,
  // .min(100, { message: "Total amount must be more than 100 Rs" })
  // .max(100000000, { message: "You can't possibly take this much Rs" }),

  duration: z
    .string()
    .transform((val) => parseInt(val)) // Convert string to number
    .refine((val) => !isNaN(val), {
      message: "Duration must be a valid number",
    }),
  // .min(1, { message: "Loan duration must be more than one year." })
  // .max(50, { message: "50 years is the max we can trust you" })
  bank: z.string(),
});
