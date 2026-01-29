import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "../utils/nprogress";

const RouteProgress = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    // thora delay taake Suspense properly feel de
    const timer = setTimeout(() => {
      NProgress.done();
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default RouteProgress;
