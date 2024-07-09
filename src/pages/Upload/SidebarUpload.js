import Button from "../../components/Button/Button";
import classNames from "classnames/bind";
import styles from "./Upload.module.scss";
import {
  AnalysticsIcon,
  CommentsIcon,
  CreatorAcademyIcon,
  FeedbackIcon,
  HomeSidebarIcon,
  PostsIcon,
} from "../../components/Icons/Icon";
const cx = classNames.bind(styles);
function SidebarUpload() {
    return (
        <div className={cx("Sidebar-upload")}>
          <div className={cx('upload-btn-sidebar')}>
            <Button outline small>
              Upload
            </Button>
          </div>
          <div className={cx('border')}></div>
          <div>
          <div className={cx('sidebar-item')}>
            <HomeSidebarIcon className={cx("icon")}></HomeSidebarIcon>
            <div className={cx("text")}>Home</div>
          </div>
          <div className={cx('sidebar-item')}>
            <PostsIcon className={cx("icon")}></PostsIcon>
            <div className={cx("text")}>Posts</div>
          </div>
          <div className={cx('sidebar-item')}>
            <CommentsIcon className={cx("icon")}></CommentsIcon>
            <div className={cx("text")}>Comments</div>
          </div>
          <div className={cx('sidebar-item')}>
            <AnalysticsIcon className={cx("icon")}></AnalysticsIcon>
            <div className={cx("text")}>Analystics</div>
          </div>
          <div className={cx('sidebar-item')}>
            <FeedbackIcon className={cx("icon")}></FeedbackIcon>
            <div className={cx("text")}>Feedback</div>
          </div>
          <div className={cx('sidebar-item')}>
            <CreatorAcademyIcon className={cx("icon")}></CreatorAcademyIcon>
            <div className={cx("text")}>Creator Academy</div>
          </div>
    
          <div>Back to tiktok</div>
          </div>
        </div>
      );
}

export default SidebarUpload;