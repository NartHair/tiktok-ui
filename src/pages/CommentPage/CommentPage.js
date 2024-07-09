import classNames from "classnames/bind";
import styles from "./CommentPage.module.scss";
import Button from "../../components/Button/Button";
import {
  CloseIcon,
  DipIcon,
  FaceBookIcon,
  GripIcon,
  LinkedInIcon,
  MusicIcon,
  SearchIcon,
  ShareIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icon";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../components/Image/Image";
import {
  faBookmark,
  faCommentDots,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "../../components/Popper";
import AccountPreview from "../../components/SuggestedAccounts/AccountPreview/AccountPreview";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function CommentsPage() {
  const [isHover, setIsHover] = useState(false);
  const [isHeartRed, setIsHeartRed] = useState(false);
  const [isNumberHeart, setIsNumberHeart] = useState(0);
  const [isSaveYellow, setIsSaveYellow] = useState(false);
  const [isNumberSave, setIsNumberSave] = useState(0);
  const [isHoverComment, setIsHoverComment] = useState(false);
  const navigate = useNavigate("");

  const handleCloseIcon = () => {
    navigate('/');
  };

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <Wrapper>
          <AccountPreview></AccountPreview>
        </Wrapper>
      </div>
    );
  };

  let hoverTime;
  const handleMouseEnter = (event) => {
    const target = event.target;
    if (
      target.closest(`.${cx("img-avatar")}`) ||
      target.closest(`.${cx("style-link")}`)
    ) {
      hoverTime = setTimeout(() => {
        setIsHover(true);
      }, 500);
    }
  };

  const handleMouseLeave = (event) => {
    const target = event.target;
    if (
      target.closest(`.${cx("img-avatar")}`) ||
      target.closest(`.${cx("style-link")}`)
    ) {
      clearTimeout(hoverTime);
      setIsHover(false);
    }
  };

  const handleHeart = () => {
    if (!isHeartRed) {
      setIsHeartRed(true);
      setIsNumberHeart(isNumberHeart + 1);
    } else {
      setIsHeartRed(false);
      setIsNumberHeart(isNumberHeart - 1);
    }
  };

  const handleSave = () => {
    if (!isSaveYellow) {
      setIsSaveYellow(true);
      setIsNumberSave(isNumberSave + 1);
    } else {
      setIsSaveYellow(false);
      setIsNumberSave(isNumberSave - 1);
    }
  };

  let timeHoverComment;
  const handleMouseEnterComment = (event) => {
    const target = event.target;
    if (
      target.closest(`.${cx("avatar-comment")}`) ||
      target.closest(`.${cx("username-text")}`)
    ) {
      timeHoverComment = setTimeout(() => {
        setIsHoverComment(true);
      }, 500);
    }
  };

  const handleMouseLeaveComment = (event) => {
    const target = event.target;
    if (
      target.closest(`.${cx("avatar-comment")}`) ||
      target.closest(`.${cx("username-text")}`)
    ) {
      clearTimeout(timeHoverComment);
      setIsHoverComment(false);
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("video")}>
        <div className={cx("header")}>
          <div
            className={cx("styled-close-icon-container")}
            onClick={handleCloseIcon}
          >
            <CloseIcon></CloseIcon>
          </div>
          <div className={cx("search")}>
            <input
              placeholder="Find related content"
              className={cx("browser-mode-input-border")}
            ></input>
            <span></span>
            <SearchIcon className={cx("icon-search")}></SearchIcon>
          </div>
          <div className={cx("icon-wrapper")}>
            <GripIcon></GripIcon>
          </div>
        </div>
        <div>
          <div className={cx("styled-video-switch")}></div>
        </div>
      </div>
      <div className={cx("comment")}>
        <div className={cx("profile-wrapper")}>
          <div className={cx("description-content-wrapper")}>
            <div>
              <Tippy
                interactive
                offset={[-50, 10]}
                render={renderPreview}
                placement="bottom"
                visible={isHover}
              >
                <div className={cx("info-container")}>
                  <div
                    className={cx("img-avatar")}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
                      className={cx("avatar")}
                      alt=""
                    />
                  </div>
                  <div
                    className={cx("style-link")}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h3 className={cx("span-unique-id")}>NartHair</h3>
                    <span className={cx("span-other-infos")}>
                      <span className={cx("span-ellipsis")}>Trần Hải</span>
                      <span>3-5</span>
                    </span>
                  </div>
                  <Button className={cx("follow-btn")} small primary>
                    Follow
                  </Button>
                </div>
              </Tippy>
            </div>
            <div className={cx("main-content")}>
              <div className={cx("title-video")}>
                <span className={cx("span-text")}>
                  Học không được giỏi nên dùng sound ngại hết cả người 😂😂
                  hahaha
                </span>
                <div className={cx("link-and-btn")}>
                  <div className={cx("link-tag")}>
                    <a href="/tag/mayman🍀🧸">
                      <strong>#mayman</strong>
                    </a>
                    <a href="/tag/ftu">
                      <strong>#graduation</strong>
                    </a>
                    <a href="/tag/nhactrungquoc">
                      <strong>#nhactrungquoc</strong>
                    </a>
                    <a href="/tag/truyenngontinh">
                      <strong>#truyenngontinh</strong>
                    </a>
                  </div>
                  <button className={cx("more-btn")}>more</button>
                </div>
              </div>
              <div className={cx("link-music-video")}>
                <div className={cx("music-icon")}>
                  <MusicIcon></MusicIcon>
                </div>
                <div className={cx("music-text")}>
                  Nhạc nền - Loăng qua loăng quăng
                </div>
              </div>
            </div>
          </div>
          <div className={cx("container")}>
            <div className={cx("flex-center-rows")}>
              <div className={cx("flex-center-row")}>
                <div className={cx("action-item")}>
                  <FontAwesomeIcon
                    className={cx("action-item-icon")}
                    icon={faHeart}
                    style={{ color: isHeartRed ? "#fe2c55" : "#444" }}
                    onClick={handleHeart}
                  ></FontAwesomeIcon>
                  <strong>{isNumberHeart}</strong>
                </div>
                <div className={cx("action-item")}>
                  <FontAwesomeIcon
                    className={cx("action-item-icon")}
                    icon={faCommentDots}
                  ></FontAwesomeIcon>
                  <strong>476</strong>
                </div>
                <div className={cx("action-item")}>
                  <FontAwesomeIcon
                    className={cx("action-item-icon")}
                    icon={faBookmark}
                    style={{ color: isSaveYellow ? "#e9e95c" : "#444" }}
                    onClick={handleSave}
                  ></FontAwesomeIcon>
                  <strong>{isNumberSave}</strong>
                </div>
              </div>
              <div className={cx("action-share")}>
                <FaceBookIcon
                  className={cx("action-share-icon")}
                ></FaceBookIcon>
                <TelegramIcon
                  className={cx("action-share-icon")}
                ></TelegramIcon>
                <LinkedInIcon
                  className={cx("action-share-icon")}
                ></LinkedInIcon>
                <WhatsAppIcon
                  className={cx("action-share-icon")}
                ></WhatsAppIcon>
                <DipIcon className={cx("action-share-icon")}></DipIcon>
                <ShareIcon className={cx("action-share-icon")}></ShareIcon>
              </div>
            </div>
          </div>
          <div className={cx("copy-link")}>
            <div className={cx("copy-link-text")}>
              <p>
                https://www.tiktok.com/@sof117_shapes/video/1235434575334758395
              </p>
            </div>
            <button className={cx("copy-link-btn")}>copy link</button>
          </div>
        </div>
        <div className={cx("tab-menu-container")}>
          <div className={cx("tab-menu-item-comments")}>comments(476)</div>
          <div className={cx("tab-menu-item-video")}>creator videos</div>
        </div>
        <div className={cx("comment-content-container-items")}>
          <div className={cx("comment-content-container")}>
            <div>
              <Tippy
                interactive
                offset={[138,-5]}
                placement="bottom"
                visible={isHoverComment}
                render={renderPreview}
              >
                <div
                  className={cx("avatar-comment")}
                  onMouseEnter={handleMouseEnterComment}
                  onMouseLeave={handleMouseLeaveComment}
                >
                  <Image
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
                    className={cx("avatar")}
                    alt=""
                  />
                </div>
              </Tippy>
            </div>

            <div className={cx("content-comment")}>
              <div className={cx("content-comment-item")}>
                <div
                  className={cx("username-text")}
                  onMouseEnter={handleMouseEnterComment}
                  onMouseLeave={handleMouseLeaveComment}
                  
                >
                  NartHair
                </div>
                <div className={cx("comment-text")}>
                  Cho mình xin tên bài nhạc với ạ
                </div>
              </div>
              <div className={cx("comment-sub-content")}>
                <div className={cx("created-time")}>19h ago</div>
                <button className={cx("comment-reply")}>Reply</button>
              </div>
            </div>

            <div className={cx("action-container")}>
              <div className={cx("like-wrapper")}>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <strong className={cx("number-heart")}>10</strong>
              </div>
            </div>
          </div>

          <div className={cx("comment-content-container")}>
            <div className={cx("avatar-comment")}>
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
                className={cx("avatar")}
                alt=""
              />
            </div>
            <div className={cx("content-comment")}>
              <div className={cx("content-comment-item")}>
                <div className={cx("username-text")}>NartHair</div>
                <div className={cx("comment-text")}>
                  Cho mình xin tên bài nhạc với ạ
                </div>
              </div>
              <div className={cx("comment-sub-content")}>
                <div className={cx("created-time")}>19h ago</div>
                <button className={cx("comment-reply")}>Reply</button>
              </div>
            </div>
            <div className={cx("action-container")}>
              <div className={cx("like-wrapper")}>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <strong className={cx("number-heart")}>10</strong>
              </div>
            </div>
          </div>

          <div className={cx("comment-content-container")}>
            <div className={cx("avatar-comment")}>
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
                className={cx("avatar")}
                alt=""
              />
            </div>
            <div className={cx("content-comment")}>
              <div className={cx("content-comment-item")}>
                <div className={cx("username-text")}>NartHair</div>
                <div className={cx("comment-text")}>
                  Cho mình xin tên bài nhạc với ạ
                </div>
              </div>
              <div className={cx("comment-sub-content")}>
                <div className={cx("created-time")}>19h ago</div>
                <button className={cx("comment-reply")}>Reply</button>
              </div>
            </div>
            <div className={cx("action-container")}>
              <div className={cx("like-wrapper")}>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <strong className={cx("number-heart")}>10</strong>
              </div>
            </div>
          </div>

          <div className={cx("comment-content-container")}>
            <div className={cx("avatar-comment")}>
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
                className={cx("avatar")}
                alt=""
              />
            </div>
            <div className={cx("content-comment")}>
              <div className={cx("content-comment-item")}>
                <div className={cx("username-text")}>NartHair</div>
                <div className={cx("comment-text")}>
                  Cho mình xin tên bài nhạc với ạ
                </div>
              </div>
              <div className={cx("comment-sub-content")}>
                <div className={cx("created-time")}>19h ago</div>
                <button className={cx("comment-reply")}>Reply</button>
              </div>
            </div>
            <div className={cx("action-container")}>
              <div className={cx("like-wrapper")}>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <strong className={cx("number-heart")}>10</strong>
              </div>
            </div>
          </div>

          <div className={cx("comment-content-container")}>
            <div className={cx("avatar-comment")}>
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7337064604406644744.jpeg?lk3s=a5d48078&nonce=17487&refresh_token=3cbc35737272362c44741749e9afd152&x-expires=1720659600&x-signature=pVVS5A8EwwxFKRoCo3wpzrGJaos%3D&shp=a5d48078&shcp=81f88b70"
                className={cx("avatar")}
                alt=""
              />
            </div>
            <div className={cx("content-comment")}>
              <div className={cx("content-comment-item")}>
                <div className={cx("username-text")}>NartHair</div>
                <div className={cx("comment-text")}>
                  Cho mình xin tên bài nhạc với ạ
                </div>
              </div>
              <div className={cx("comment-sub-content")}>
                <div className={cx("created-time")}>19h ago</div>
                <button className={cx("comment-reply")}>Reply</button>
              </div>
            </div>
            <div className={cx("action-container")}>
              <div className={cx("like-wrapper")}>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <strong className={cx("number-heart")}>10</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsPage;
