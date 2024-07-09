import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Image from "../../Image/Image";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AccountPreview( ) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
          className={cx("avatar")}
          alt=""
        />
        <Button className={cx('follow-btn')} outline>Follow</Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>NartHair</strong>
          <FontAwesomeIcon
            className={cx("check")}
            icon={faCheckCircle}
          ></FontAwesomeIcon>
        </p>
        <p className={cx("name")}>Trần Văn Hải</p>

        <p className={cx('analytics')}>
            <strong className={cx('value')}>8.2M </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>8.139M </strong>
            <span className={cx('label')}>Followers</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
