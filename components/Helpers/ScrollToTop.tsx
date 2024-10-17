"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      if (window.scrollY < 300) setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-4 animate-pulse right-2 z-[100000]`}>
      {isVisible && (
        <button
          onClick={ScrollToTop}
          className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;
