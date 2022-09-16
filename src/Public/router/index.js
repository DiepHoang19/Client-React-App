import config from "../config";
import Home from "../Page/Home/Home";
import Groups from "../Page/Groups/index";

const PublicRouter = [
  {
    path: config.router.home,
    component: Home,
  },
  {
    path: config.router.groups,
    component: Groups,
  },
];

const PrivateRouter = [];

export { PublicRouter, PrivateRouter };
