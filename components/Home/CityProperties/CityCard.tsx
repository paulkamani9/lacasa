import Image from "next/image";

type CityCardPros = {
  id: number;
  image: string;
  cityName: string;
  numberOfProperties: number;
};

const CityCard = ({
  image,
  cityName,
  numberOfProperties,
}: CityCardPros) => {
  return (
    <div className="relative rounded-lg overflow-hidden m-2 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt={cityName}
        width={700}
        height={700}
        className="rounded-lg w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute p-4 top-4 ">
        <h1 className="text-lg font-semibold text-white">{cityName}</h1>
        <p className="text-gray-200">{numberOfProperties}</p>
      </div>
    </div>
  );
};

export default CityCard;
