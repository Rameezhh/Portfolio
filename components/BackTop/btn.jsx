import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-none right-6 bg-btnBG link text-btnFG p-3 px-5 rounded-full shadow-lg hover:bg-btnFG hover:text-btnBG transition duration-300 ease-in-out"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTop;
