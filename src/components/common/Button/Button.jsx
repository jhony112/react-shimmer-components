import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

/**
 *
 * @param size
 * @return {JSX.Element}
 * @constructor
 */
const ShimmerButton = ({ size }) => (
    <div
        className={classNames({
            'shimmer shimmer-button': true,
            [`shimmer-button--${size}`]: true,
        })}
    />
);

ShimmerButton.propTypes = {
    size: PropTypes.oneOf(['lg', 'md', 'sm']),
};

ShimmerButton.defaultProps = {
    size: 'md',
};

export default ShimmerButton;
