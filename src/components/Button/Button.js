import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick, message }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      {message}
    </button>
  );
};

Button.propTypes = {
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button;