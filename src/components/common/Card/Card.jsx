import PropTypes from 'prop-types';
import classNames from 'classnames';
import './card.scss';

/**
 *
 * @param children
 * @param className
 * @param paddingSize
 * @return {JSX.Element|null}
 * @constructor
 */
const ShimmerCard = ({ children, className, paddingSize }) => {
    if (!children) return null;
    return (
        <div
            className={classNames({
                'shimmer-card': true,
                [`p-${paddingSize}`]: paddingSize,
                [className]: className,
            })}
        >
            {children}
        </div>
    );
};

ShimmerCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
    paddingSize: PropTypes.oneOf([false, 20, 30]),
};

ShimmerCard.defaultProps = { paddingSize: false };

export default ShimmerCard;
