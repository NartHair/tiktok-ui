import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PoperWrapper } from "../../components/Popper";
import {
  DipIcon,
  FaceBookIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icon";
const cx = classNames.bind(styles);
function ShareNumber({ children, placement = "top", delay=[400,400], offset=[80, 15] }) {
  const defaultContent = (
    <div className={cx("number-and-icon")}>
      <FontAwesomeIcon className={cx("icon")} icon={faShare}></FontAwesomeIcon>
      <strong className={cx("number")}>0</strong>
    </div>
  );

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PoperWrapper>
          <div className={cx("preview")}>
            <div className={cx("preview-item")}>
              <DipIcon></DipIcon>
              <strong className={cx("preview-item-text")}>Embed</strong>
            </div>
            <div className={cx("preview-item")}>
              <FaceBookIcon></FaceBookIcon>
              <strong className={cx("preview-item-text")}>
                Share to FaceBook
              </strong>
            </div>

            <div className={cx("preview-item")}>
              <WhatsAppIcon></WhatsAppIcon>
              <strong className={cx("preview-item-text")}>
                Share to WhatsApp
              </strong>
            </div>

            <div className={cx("preview-item")}>
              <LinkedInIcon></LinkedInIcon>
              <strong className={cx("preview-item-text")}>
                Share to Linked
              </strong>
            </div>

            <div className={cx("preview-item")}>
              <TelegramIcon></TelegramIcon>
              <strong className={cx("preview-item-text")}>
                Share to Telegram
              </strong>
            </div>
          </div>
        </PoperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        render={renderPreview}
        placement={placement}
        delay={delay}
        offset={offset}
        interactive
      >
        {children || defaultContent}
      </Tippy>
    </div>
  );
}

export default ShareNumber;
