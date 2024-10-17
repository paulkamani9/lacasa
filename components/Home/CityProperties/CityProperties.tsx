import SectionHeading from "@/components/Helpers/SectionHeading";
import CitySlider from "./CitySlider";

const CityProperties = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          heading="Explore"
          description="Where do you want to live"
        />
        <div className="mt-10 md:mt-16">
            <CitySlider />
        </div>
      </div>
    </div>
  );
};
export default CityProperties;
