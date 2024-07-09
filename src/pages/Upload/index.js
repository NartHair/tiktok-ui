import ContentUpload from "./ContentUpload";
import SidebarUpload from "./SidebarUpload";
import classNames from "classnames/bind";
import styles from "./Upload.module.scss";
const cx = classNames.bind(styles);
function Upload() {
  return(
    <div className={cx('Upload_page')}>
      <SidebarUpload></SidebarUpload>
      <ContentUpload></ContentUpload>
    </div>
  )
}
export default Upload;
