import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import CommentNumber from "./CommentNumber";
import HeartNumber from "./HeartNumber";
import SaveNumber from "./SaveNumber";
import ShareNumber from "./ShareNumber";
import InforUserTopVideo from "./InfoUserTopVideo";
const cx = classNames.bind(styles);

function Home() {
  const [video, setVideo] = useState(null);

  const handlePreviewVideo = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      file.preview = URL.createObjectURL(file);
      setVideo(file);
    }
  };

  useEffect(() => {
    return () => {
      if (video) {
        URL.revokeObjectURL(video.preview);
      }
    };
  }, [video]);

  return (
    <div className={cx("page-home")}>
      <div>
        <InforUserTopVideo></InforUserTopVideo>
      </div>
      <div className={cx("video-home")}>
        <input type="file" onChange={handlePreviewVideo} />
        {video && <video src={video.preview} controls />}
      </div>
      <div className={cx("icon-right-video")}>
        <HeartNumber></HeartNumber>
        <CommentNumber></CommentNumber>
        <SaveNumber></SaveNumber>
        <ShareNumber></ShareNumber>
      </div>
    </div>
  );
}

export default Home;
