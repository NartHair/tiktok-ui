import classNames from "classnames/bind";
import styles from "./Upload.module.scss";
import Button from "../../components/Button/Button";
import { CapcutIcon, LiveIcon, UploadIcon } from "../../components/Icons/Icon";
const cx = classNames.bind(styles);
function ContentUpload() {
  return (
    <div className={cx("Content-Upload")}>
      <div className={cx("Border-content-solid")}>
        <div className={cx("Border-content-dotted")}>
          <div className={cx("upload-stage-container")}>
            <UploadIcon></UploadIcon>
            <div className={cx("text-content")}>
              <strong>Select video to upload</strong>
              <p>Or drag and drop it here</p>
            </div>
            <Button primary small>
              select video
            </Button>
          </div>
        </div>
        <div className={cx("edit-items")}>
          <div className={cx("edit-item")}>
            <LiveIcon></LiveIcon>
            <div className={cx("info-edit")}>
              <div className={cx("bottom-content-text")}>Size and duration</div>
              <div className={cx("bottom-content-info")}>
                Maximum size: 10 GB, video duration: 10 minutes.
              </div>
            </div>
          </div>
          <div className={cx("edit-item")}>
            <LiveIcon></LiveIcon>
            <div className={cx("info-edit")}>
              <div className={cx("bottom-content-text")}>File formats</div>
              <div className={cx("bottom-content-info")}>
                Recommended: “.mp4”. Other major formats are supported.
              </div>
            </div>
          </div>
          <div className={cx("edit-item")}>
            <LiveIcon></LiveIcon>
            <div className={cx("info-edit")}>
              <div className={cx("bottom-content-text")}>Video resolutions</div>
              <div className={cx("bottom-content-info")}>
                Minimum resolution: 720p. 2K and 4K are supported.
              </div>
            </div>
          </div>
          <div className={cx("edit-item")}>
            <LiveIcon></LiveIcon>
            <div className={cx("info-edit")}>
              <div className={cx("bottom-content-text")}>Aspect ratios</div>
              <div className={cx("bottom-content-info")}>
                Recommended: 16:9 for landscape, 9:16 for vertical.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("bottom-container")}>
        <div className={cx("text-bottom-container")}>
          <h3>Create high quality videos on CapCut Online</h3>
          <p>
            Automatically shorten your videos and create videos from scripts
            with AI-powered features.
          </p>
        </div>
        <Button primary small>
          <div className={cx('bottom-container-btn')}>
            <CapcutIcon></CapcutIcon>
            try now
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ContentUpload;
