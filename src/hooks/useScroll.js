import { useEffect, useState } from "react";

const useScroll = (arr = []) => {
  const [visible, setVisible] = useState({});

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const isVisible = entry.isIntersecting;

      setVisible((prev) => {
        if (prev[id] === isVisible) return prev;
        return { ...prev, [id]: isVisible };
      });
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });

    arr.forEach((el) => {
      const id = document.getElementById(el);
      if (id) observer.observe(id);
    });

    return () => observer.disconnect();
  }, [arr]);

  // useEffect(() => {
  //   console.log("Visible state changed:", visible);
  // }, [visible]);

  return visible;
};

export default useScroll;
