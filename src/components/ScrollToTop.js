import React, { useEffect } from "react";
import Context from "react-router";
const useContext = React.useContext;


const ScrollToTop = () => {
  const { pathname } = undefined === useContext(Context) ? '/' : useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
