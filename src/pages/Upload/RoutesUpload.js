import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Upload.module.scss";
import config from "../../config";
import { PlusIcon } from "../../components/Icons/Icon";

const cx = classNames.bind(styles);

const RoutesUpload = () => {
  const navigate = useNavigate();
  const handleUploadVideo = () => {
    navigate(config.routes.upload);
  };

  return (
    <button className={cx("upload-btn")} onClick={handleUploadVideo}>
      <PlusIcon className={cx("icon-upload")}></PlusIcon>
      <span className={cx("text-icon-upload")}>Upload</span>
    </button>
  );
};

export default RoutesUpload;
