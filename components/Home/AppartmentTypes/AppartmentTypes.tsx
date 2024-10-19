import SectionHeading from "@/components/Helpers/SectionHeading";
import { appartmentTypeData } from "@/data/data";
import AppartmentTypeCard from "./AppartmentTypeCard";

const AppartmentTypes = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          heading="Apartment Types"
          description="What are you looking for"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center">
          {appartmentTypeData.map((type, index) => (
            <div
              key={type.id}
              data-aos="zoom-in"
              data-aos-delay={`${index * 150}`}
            >
              <AppartmentTypeCard {...type} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AppartmentTypes;
