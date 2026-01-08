import { LuSquareChevronUp } from "react-icons/lu";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="cursor-pointer fixed z-50 right-6 bottom-6"
      onClick={handleScrollToTop}
    >
      <LuSquareChevronUp
        className="size-10
    text-sky-900 hover:text-sky-950
    dark:text-sky-400 dark:hover:text-sky-500"
      />
    </button>
  );
};

export default ScrollToTop;
