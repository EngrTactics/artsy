import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// ScrollToTop is to fix a flaw with the link tag in the react-router-dom that starts a page from the middle instead of top
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
};

export default ScrollToTop;
