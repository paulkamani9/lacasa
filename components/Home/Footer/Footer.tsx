import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black ">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* first grid */}
        <div className="flex flex-col items-center space-x-2">
          <div className="w-[64px] h-[60px] md:w-[74px] md:h-[68px]    relative">
            <Image
              src={"/logos/wAndG.png"}
              alt="la casa properties logo"
              fill
              objectFit="center"
            />
          </div>
          <p className="text-gray-300 mt-6">
            We at La Casa believe that a home is more than just a place – it is
            where memories are made, dreams are nurtured, and lives are built.
          </p>
          <p className="text-gray-300 mt-4 font-semibold">
            kipozision@lacasaproperties.mu
          </p>
          <p className="text-gray-300 mt-2 font-semibold">+230 59166627</p>
          {/* socials */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-blue-600" />
            <FaTiktok className="w-6 h-6 text-white" />
            <FaYoutube className="w-6 h-6 text-red-600" />
            <FaInstagram className="w-6 h-6 text-white" />
          </div>
        </div>
        {/* second grid */}
        <div className="md:mx-auto">
          <h1 className="footer_heading">Popular Search</h1>
          <p className="footer_link">Apartments for Sale</p>
          <p className="footer_link">Lands for Sale</p>
        </div>
        {/* third grid */}
        <div className="md:mx-auto">
          <h1 className="footer_heading">Quick Links</h1>
          <p className="footer_link">Terms and Conditions</p>
          <p className="footer_link">Email Subscription</p>
          <p className="footer_link">Our Services</p>
          <p className="footer_link">Contact support</p>
          <p className="footer_link">FAQs</p>
        </div>
        {/* fourth grid */}
        <div className="md:mx-auto">
          <h1 className="footer_heading">Places</h1>
          <p className="footer_link">Flic en Flac</p>
          <p className="footer_link">Grand Baie</p>
          <p className="footer_link">Vacoas</p>
          <p className="footer_link">Tamarin</p>
        </div>
      </div>
      <p className="text-white text-center text-sm font-semibold mt-4 opacity-90">
        © 2024 La Casa Properties. All rights reserved.
      </p>
      <p className="text-white text-center text-sm font-semibold mt-2 mb-10 opacity-90">
        Developed by Paul
      </p>
    </div>
  );
};
export default Footer;
