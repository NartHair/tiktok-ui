import { useState, forwardRef } from "react";
import PropTypes from 'prop-types';
import images from '../../assets/images'
import styles from './Image.module.scss';
import classNames from "classnames";
const Image = forwardRef(({ src ,className ,alt, ...props }, ref) => {
  const [fallBack, setFallBack] = useState("");

  const handleError = () => {
    setFallBack(images.noImage);
  };
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <img
    className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
}
export default Image;
