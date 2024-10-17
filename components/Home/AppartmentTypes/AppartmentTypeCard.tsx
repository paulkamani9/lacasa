import Image from "next/image";

type AppartmentTypeCardProps = {
  id: number;
  icon: string;
  type: string;
  number: number;
};

const AppartmentTypeCard = ({
  icon,
  type,
  number,
}: AppartmentTypeCardProps) => {
  return (
    <div className="rounded-lg shadow-lg p-6 hover:scale-110 transition-all">
      <Image src={icon} alt={type} width={50} height={50} />
      <div className="mt-12">
        <h1 className="text-lg font-bold">{type}</h1>
        <p className="mt-2 text-sm text-gray-700">{number}</p>
      </div>
    </div>
  );
};
export default AppartmentTypeCard;
