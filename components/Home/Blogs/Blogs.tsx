import SectionHeading from "@/components/Helpers/SectionHeading";
import { blogs } from "@/data/data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="py-16 pb-16 bg-gray-200">
      <div className="w-[85%] lg:w-[80%] mx-auto">
        <SectionHeading heading="Blogs" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              data-aos="zoom-out"
              data-aos-delay={`${index * 100}`}
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;
