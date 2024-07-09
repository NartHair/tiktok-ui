import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { EditProfileIcon, LockIcon } from "../../components/Icons/Icon";
import ShareNumber from "../Home/ShareNumber";
import ShareIconProfile from "./ShareIconProfile";

const cx = classNames.bind(styles);
function Profile() {
  return (
    <div className={cx("infor-folow")}>
      <div className={cx("avatar-infor")}>
        <div className={cx("avatar")}>
          <Image
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
            alt=""
            className={cx("avatar")}
          ></Image>
        </div>

        <div className={cx("infor-nick-username")}>
          <div className={cx("nick-name")}>nart_hair</div>
          <div className={cx("username")}>Trần Hải</div>
          <div className={cx("btn-profile")}>
            <Button className={cx("btn")} outline>
              <EditProfileIcon></EditProfileIcon>
              <span>Edit Profile</span>
            </Button>
          </div>
        </div>

        <div className={cx("share-icon")}>
          <ShareNumber delay={[150, 300]} placement="bottom" offset={[-100,0]}>
            <ShareIconProfile></ShareIconProfile>
          </ShareNumber>
        </div>
      </div>

      <h3 className={cx("fl-like")}>
        <div className={cx("number-fl-and-like")}>
          <strong>1</strong>
          <span>Following</span>
        </div>

        <div className={cx("number-fl-and-like")}>
          <strong>59</strong>
          <span>Follower</span>
        </div>

        <div className={cx("number-fl-and-like")}>
          <strong>0</strong>
          <span className={cx("liked")}>Liked</span>
        </div>
      </h3>

      <div className={cx("bio")}>No bio yet</div>
      <div className={cx("video-favor-liked")}>
        <p className={cx('video')}>
          <span style={{ color: "#161823" }}>Videos</span>
        </p>
        <p className={cx('favorites')}>
          <LockIcon></LockIcon>
          <span>Favorites</span>
        </p>
        <p className={cx('liked')}>
          <LockIcon></LockIcon>
          <span>Liked</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
