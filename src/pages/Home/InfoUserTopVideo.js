import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Image from "../../components/Image/Image";
import Tippy from "@tippyjs/react/headless";
import { Wrapper } from "../../components/Popper";
import AccountPreview from "../../components/SuggestedAccounts/AccountPreview/AccountPreview";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const cx = classNames.bind(styles);
function InforUserTopVideo() {
  const [isHover, setIsHover] = useState(false);
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <Wrapper>
          <AccountPreview></AccountPreview>
        </Wrapper>
      </div>
    );
  };

  
let hoverTimer;
const handleMouseEnter = (event) => {
  const target = event.target;
  if (
    target.closest(`.${cx("username")}`) ||
    target.closest(`.${cx("avatar")}`)
  ) {
    hoverTimer = setTimeout(() => {
      setIsHover(true);
    }, 800);
  }
};

const handleMouseLeave = (event) => {
  const target = event.target;
  if (
    target.closest(`.${cx("username")}`) ||
    target.closest(`.${cx("avatar")}`)
  ) {
    clearTimeout(hoverTimer);
    setIsHover(false);
  }
};
  return (
    <div className={cx("tippy-video")}>
      <Tippy
        placement="bottom"
        render={renderPreview}
        offset={[-130, -28]}
        visible={isHover}
      >
        <div className={cx("avatar-username-title-video")}>
          <div
            className={cx("avatar")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
              className={cx("avatar")}
              alt=""
            ></Image>
          </div>
          <div className={cx("username-title-video")}>
            <div
              className={cx("username")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h4>NartHair</h4>
              <h5>Trần Văn Hải</h5>
            </div>
            <div className={cx("title-video")}>
              <span>
                Nhiều cụ chiến quá nên ngồi cân nhắc mãi thôi
                <Link>
                  <strong style={{ color: "#2B5DB9" }}> #foryou</strong>
                </Link>
                <Link>
                  <strong style={{ color: "#2B5DB9" }}> #javascript</strong>
                </Link>
                <Link>
                  <strong style={{ color: "#2B5DB9" }}> #python</strong>
                </Link>
                <Link>
                  <strong style={{ color: "#2B5DB9" }}> #taylorswift</strong>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Tippy>

      <Button className={cx("follow-btn")} outline>
        Follow
      </Button>
    </div>
  );
}

export default InforUserTopVideo;
