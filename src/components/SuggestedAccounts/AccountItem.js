import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import Image from "../Image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper } from "../Popper";
import AccountPreview from "./AccountPreview/AccountPreview";
const cx = classNames.bind(styles);
function AccountItem() {

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <Wrapper>
          <AccountPreview outline></AccountPreview>
        </Wrapper>
      </div>
    )
  }
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        placement="bottom"
        offset={[-16, 0]}
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <Image
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
            className={cx("avatar")}
            alt=""
          />

          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>NartHair</strong>
              <FontAwesomeIcon
                className={cx("check")}
                icon={faCheckCircle}
              ></FontAwesomeIcon>
            </p>
            <p className={cx("name")}>Trần Văn Hải</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
