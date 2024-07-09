import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);
function SaveNumber() {
  const [numberSave, setNumberSave] = useState(0);
  const [isSaveYellow, setIsSaveYellow] = useState(false);

  const handleSave = () => {
    if (!isSaveYellow) {
      setNumberSave(numberSave + 1);
      setIsSaveYellow(true);
    } else {
      setNumberSave(numberSave - 1);
      setIsSaveYellow(false);
    }
  };
  return (
    <div className={cx("number-and-icon")}>
      <FontAwesomeIcon
        className={cx("icon")}
        icon={faBookmark}
        style={{ color: isSaveYellow ? "#e9e95c" : "#444" }}
        onClick={handleSave}
      ></FontAwesomeIcon>
      <strong className={cx("number")}>{numberSave}</strong>
    </div>
  );
}

export default SaveNumber;
