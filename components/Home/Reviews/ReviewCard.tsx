import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

type UserReviewProps = {
  id: number;
  name: string;
  location: string;
  userImage: string;
  review: string;
};

const ReviewCard = ({
  name,
  location,
  userImage,
  review,
}: UserReviewProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-yellow-900/20" />
      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
      </div>
      <p className="mt-6 text-base text-gray-600 font-medium">{review}</p>
      <div className="w-full h-[1.2px] bg-gray-600 opacity-10 my-6" />
      <div className="flex items-center space-x-4">
        <Image
          src={userImage}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
