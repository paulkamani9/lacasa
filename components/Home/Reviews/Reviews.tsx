import SectionHeading from "@/components/Helpers/SectionHeading"
import ReviewSlider from "./ReviewSlider"

const Reviews = () => {
  return (
    <div className="py-16 bg-[#fef7f6]">
        <div className="w-[80%] mx-auto">
            <SectionHeading heading="Reviews" description="What people say about us"/>
            <div className="mt-14">
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}
export default Reviews