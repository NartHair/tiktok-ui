import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button( { 
    to, 
    href, 
    primary=false, 
    small = false, 
    large= false, 
    outline = false, 
    rounded = false,
    disable = false,
    text = false, 
    className,
    children, 
    onClick, 
    ...passProps } ) 
    {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if(disable) {
        Object.keys(props).forEach(key => {
            if( key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if(to) {
        props.to = to;
        Comp = Link;
    }else if(href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        [className] : className,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    text: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Button;