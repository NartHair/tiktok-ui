import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
function CommentNumber() {
  const navigate = useNavigate()
  const handleComments = () => {
    navigate('/CommentPage')
  }
  return (
    <div className={cx("number-and-icon")}>
      <FontAwesomeIcon
        className={cx("icon")}
        icon={faCommentDots}
        onClick={handleComments}
      ></FontAwesomeIcon>
      <strong className={cx("number")}>2.7k</strong>
    </div>
  );
}

export default CommentNumber;
