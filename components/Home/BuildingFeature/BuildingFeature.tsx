import SectionHeading from "@/components/Helpers/SectionHeading";
import { buildings } from "@/data/data";
import BuildingFeatureCard from "./BuildingFeatureCard";

const BuildingFeature = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="w-[85%] lg:w-[80%] mx-auto">
        <SectionHeading heading="Features" description="What do you want" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
          {buildings.map((building, index) => (
            <div
              key={building.id}
              data-aos="fade-left"
              data-aos-delay={`${index * 10}`}
            >
              <BuildingFeatureCard {...building} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BuildingFeature;
