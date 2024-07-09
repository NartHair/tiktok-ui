import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);
function HeartNumber() {
  const [numberHeart, setNumberHeart] = useState(0);
  const [isHeartRed, setIsHeartRed] = useState(false);

  const handleHeart = () => {
    if (!isHeartRed) {
      setNumberHeart(numberHeart + 1);
      setIsHeartRed(true);
    }else {
      setNumberHeart(numberHeart - 1);
      setIsHeartRed(false);
    }
  };
  return (
    <div className={cx("number-and-icon")}>
      <FontAwesomeIcon
        className={cx("icon")}
        icon={faHeart}
        style={{ color: isHeartRed ? "#fe2c55" : "#444" }}
        onClick={handleHeart}
      ></FontAwesomeIcon>
      <strong className={cx("number")}>{numberHeart}</strong>
    </div>
  );
}

export default HeartNumber;
