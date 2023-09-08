import PropTypes from 'prop-types';
import classNames from 'classnames';
import './text.scss';

/**
 *
 * @param line
 * @param gap
 * @param className
 * @return {JSX.Element}
 * @constructor
 */
const ShimmerText = ({ line, gap, className }) => {
    const renderLines = () => {
        const text_lines = [];

        for (let index = 0; index < line; index++) {
            text_lines.push(<div className="shimmer shimmer-text-line" key={index} />);
        }

        return text_lines;
    };

    return (
        <div
            className={classNames({
                'grid shimmer-text': true,
                [`grid-gap-${gap}`]: gap,
                [className]: className,
            })}
        >
            {renderLines()}
        </div>
    );
};

ShimmerText.propTypes = {
    line: PropTypes.number,
    gap: PropTypes.oneOf([10, 15, 20, 30]),
    className: PropTypes.string,
};

ShimmerText.defaultProps = {
    line: 5,
    gap: 15,
};

export default ShimmerText;
