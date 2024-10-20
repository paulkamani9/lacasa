import SectionHeading from "@/components/Helpers/SectionHeading";
import { properties } from "@/data/data";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="w-[85%] lg:w-[80%] mx-auto">
        <SectionHeading heading="Discover" description="See and Tell" />
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          {properties.map((property, index) => (
            <div
              key={property.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 10}`}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Properties;
