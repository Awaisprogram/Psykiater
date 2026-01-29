import NProgress from "nprogress";
import "nprogress/nprogress.css";

// optional configs (recommended)
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.2,
});

export default NProgress;
