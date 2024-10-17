import Link from "next/link";
import { navLinks } from "@/constants/constant";
import { CgClose } from "react-icons/cg";

type MobileNavbarProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ showNav, closeNav }: MobileNavbarProps) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-[100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      />
      {/* navlinks */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-black space-y-6 z-[10000]`}
      >
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.url}>
            <p className="font-medium text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] hover:text-yellow-300">
              {navLink.label}
            </p>
          </Link>
        ))}
        {/* close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white hover:text-yellow-300"
        />
      </div>
    </div>
  );
};
export default MobileNavbar;
