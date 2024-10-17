import Image from "next/image";
import { BiCalendar, BiMessage } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

type BlogProps = {
  id: number;
  date: string;
  comment: string;
  title: string;
  shortDescription: string;
  image: string;
};

const BlogCard = ({
  date,
  comment,
  title,
  shortDescription,
  image,
}: BlogProps) => {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full"
        />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BiCalendar className="text-yellow-600" />
              <span className="text-sm text-gray-700">{date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BiMessage className="text-yellow-600" />
              <span className="text-sm text-gray-700">{comment}</span>
            </div>
          </div>
          {/* title */}
          <div className="group">
            <h1 className="mt-6 font-bold hover:underline cursor-pointer mb-2 text-lg text-gray-700">
              {title}
            </h1>
            <p className="text-gray-500 text-base">{shortDescription}</p>
            <div className="mt-4 flex items-center space-x-2 group-hover:text-yellow-500 cursor-pointer">
              <span className="font-bold">Read More</span>
              <BsArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
