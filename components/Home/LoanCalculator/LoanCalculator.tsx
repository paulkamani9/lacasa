import SectionHeading from "@/components/Helpers/SectionHeading";
import LoanCalculatorCard from "./LoanCalculatorCard";

const LoanCalculator = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="mx-auto w-[80%] flex flex-col">
        <SectionHeading
          heading="Try our Loan Calculator"
          description="See your monthly repayments fee"
        />

        <LoanCalculatorCard />
      </div>
    </div>
  );
};
export default LoanCalculator;
