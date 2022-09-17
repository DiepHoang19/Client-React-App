
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
