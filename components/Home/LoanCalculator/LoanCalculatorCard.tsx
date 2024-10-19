"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LoanCalculatorSchema } from "@/schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { calculateMonthlyPayments } from "@/utilities";
import { BsExclamationCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

const LoanCalculatorCard = () => {
  const [error, setError] = useState<string | undefined>();
  const [monthlyPayments, setMonthlyPayments] = useState<number | undefined>();

  const form = useForm<z.infer<typeof LoanCalculatorSchema>>({
    resolver: zodResolver(LoanCalculatorSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoanCalculatorSchema>) {
    setError(undefined);
    setMonthlyPayments(undefined);
    await calculateMonthlyPayments(values).then((data) => {
      if (data.error) setError(data.error);
      if (data.monthlyPayments) setMonthlyPayments(data.monthlyPayments);
    });
  }

  return (
    <Card className=" mx-auto w-full mt-10 sm:w-[90%]  lg:w-[80%] xl:w-[70%]">
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onChange={() => {
              setMonthlyPayments(undefined);
              setError(undefined);
            }}
            className="flex flex-col gap-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="totalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    Total Amount (mur):
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Total loan amount"
                      {...field}
                      className="text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="bank"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Bank</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-base px-6 flex items-center gap-4">
                          <SelectValue placeholder="Choose a Bank" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Absa">Absa</SelectItem>
                        <SelectItem value="Bank One">Bank One</SelectItem>
                        <SelectItem value="HSBC">HSBC</SelectItem>
                        <SelectItem value="MCB">MCB</SelectItem>
                        <SelectItem value="SBM">SBM</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Interest rates */}
              <div className="flex flex-col items-start gap-4">
                <p className="font-medium">Interest Rate per year</p>
                <p className="text-gray-700 font-medium px-4">12.5 %</p>
              </div>
            </div>

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Duration (years):</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Number of years"
                      {...field}
                      className="text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <div className="flex w-fit items-center py-4 px-6 gap-4 border-red-600 border rounded-md">
                <BsExclamationCircleFill size={16} className="text-red-600" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            {monthlyPayments && (
              <div className="flex w-fit items-center py-4 px-6 gap-4 border-green-600 border rounded-md">
                <BsFillCheckCircleFill size={16} className="text-green-600" />
                <p className="">
                  Monthly Payments:
                  <span className="font-semibold">
                    {" " + monthlyPayments.toFixed(2) + " mur "}
                  </span>{" "}
                </p>
              </div>
            )}

            <Button type="submit" size="lg" className="md:self-end">
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default LoanCalculatorCard;
