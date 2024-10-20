import SearchBar from "@/components/Helpers/SearchBar";


const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-cover bg-center">
      {/* Video Background  */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full object-cover h-full"
      >
        <source src={"/videos/new-hero.mp4"} />
        Your browser does not support the video tag.
      </video>


      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Hero Content */}
      <div className="flex flex-col h-full justify-center items-center w-[95%] sm:w-[80%] mx-auto relative z-10">
        <h1
          data-aos="fade-left"
          className="text-yellow-300 text-center text-base sm:text-lg uppercase font-medium"
        >
          Make your Heaven
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="150"
          className="tracking-wider text-center font-semibold text-3xl sm:text-5xl text-white mt-4"
        >
          Create your Story
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-center text-sm sm:text-base text-gray-200"
        >
          La Casa Properties brings you Island beauty.
        </p>
        {/* search bar */}
        <div data-aos="zoom-in" data-aos-delay="450" className="mt-12 w-full ">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
