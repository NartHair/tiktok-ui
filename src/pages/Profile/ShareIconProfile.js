import React from 'react';
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { ShareIcon } from '../../components/Icons/Icon';

const cx = classNames.bind(styles);

const ShareIconProfile = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <ShareIcon className={cx('icon')}></ShareIcon>
  </div>
));

export default ShareIconProfile;
