"use server";
type values = {
  totalAmount: number;
  duration: number;
  bank: string;
};
export const calculateMonthlyPayments = async({
  totalAmount,
  duration,
}: //   bank,
values) => {
  if (totalAmount < 100)
    return { error: "Total amount must be more than 100 mur" };
  if (totalAmount > 999999999)
    return { error: "Total amount must be less than 1 billion mur" };
  if (duration > 50) return { error: "Loan duration cannot exceed 50 years" };
  if (duration < 1) return { error: "Loan duration must be up to a year" };

  const r = 12.5 / 100;
  const totalMonths = duration * 12;

  const A = totalAmount * (1 + r) ** duration;

  const monthlyPayments = A / totalMonths;
  return { monthlyPayments };
};
