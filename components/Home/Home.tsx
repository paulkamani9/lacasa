"use client";

import { useEffect } from "react";
import AppartmentTypes from "./AppartmentTypes/AppartmentTypes";
import Blogs from "./Blogs/Blogs";
import BuildingFeature from "./BuildingFeature/BuildingFeature";
import CityProperties from "./CityProperties/CityProperties";
import Hero from "./Hero/Hero";
import Properties from "./Properties/Properties";
import Reviews from "./Reviews/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import LoanCalculator from "./LoanCalculator/LoanCalculator";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <AppartmentTypes />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <LoanCalculator />
      <Blogs />
    </div>
  );
};
export default Home;
