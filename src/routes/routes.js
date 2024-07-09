import config from "../config";
import { HeaderOnly } from "../layouts";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Live from "../pages/Live";
import CommentsPage from "../pages/CommentPage/CommentPage";

const publicRoutes = [
  { path: config.routes.home, Component: Home },
  { path: config.routes.following, Component: Following },
  { path: config.routes.profile, Component: Profile },
  { path: config.routes.live, Component: Live },
  { path: config.routes.upload, Component: Upload, Layout: HeaderOnly},
  { path: config.routes.search, Component: Search, Layout: null },
  { path: config.routes.CommentsPage, Component: CommentsPage, Layout: null} 
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
