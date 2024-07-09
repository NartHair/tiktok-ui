import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "../../../config";
import Menu from "./Menu";
import { MenuItem } from "./Menu";
import Image from "../../../components/Image/Image";
import {
  HomeIcon,
  LiveIcon,
  UserGroupIcon,
} from "../../../components/Icons/Icon";
import SuggestedAccounts from "../../../components/SuggestedAccounts/SuggestedAccounts";
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
        <MenuItem
          title="Profile"
          to={config.routes.profile}
          icon={
            <Image
              className={cx("avatar-profile")}
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=29432&refresh_token=43c934be6a31cecea1423faaa7b7914b&x-expires=1715947200&x-signature=ET6tz41sJpB65dtVuaZyBW6mn4g%3D&shp=a5d48078&shcp=81f88b70"
              alt="avatar"
            />
          }
        />
      </Menu>
      <SuggestedAccounts label="Suggested account"></SuggestedAccounts>
      <SuggestedAccounts label="Following accounts"></SuggestedAccounts>
    </aside>
  );
}

export default Sidebar;
