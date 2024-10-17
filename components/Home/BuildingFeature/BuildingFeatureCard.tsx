"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

type BuildingProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const BuildingFeatureCard = ({ id,title, description, image }: BuildingProps) => {
  return (
    <Tilt className="rounded-lg shadow-md p-4 bg-white">
      <div className="w-16 aspect-square ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full">
        <Image src={image} alt={title} width={40} height={40} />
      </div>
      <div className="p-2">
        <p className="mt-6 text-yellow-600 font-bold text-xl">0{id}</p>
        <p className="text-lg text-gray-700 font-bold my-2">{title}</p>
        <p className="text-sm opacity-70 text-gray-700">{description}</p>
      </div>
    </Tilt>
  );
};
export default BuildingFeatureCard;
