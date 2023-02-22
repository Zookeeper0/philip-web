import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  let timer: any;
  const resizeWindow = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 현재 window width 값
      setWindowWidth(window.innerWidth);
    }, 500);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  return windowWidth;
};

export default useWindowWidth;
