import Button from "../../Button/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button className={classes} to={data.to} onClick={onClick}>
      {data.icon} {data.title}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
