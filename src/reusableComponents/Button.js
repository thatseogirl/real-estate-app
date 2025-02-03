import PropTypes from "prop-types";
import StyledButton from "../styles/Button.styled";

const Button = ({
    color,
    text,
    onClick,
    bgColor,
    position,
    width,
    float,
    left,
    textTransform,
    padding,
    borderRadius,
}) => {
    return (
        <StyledButton
            style={{
                backgroundColor: bgColor,
                position,
                left,
                color,
                textTransform,
                padding,
                borderRadius,
                float,
                width,
            }}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    );
};

Button.defaultProps = {
    color: "#fff",
};

Button.proptype = {
    text: PropTypes.string,
    color: PropTypes.string,
    float: PropTypes.string,
    bgColor: PropTypes.string,
    textTransform: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
