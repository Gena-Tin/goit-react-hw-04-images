import PropTypes from 'prop-types';
import css from './Notification.module.css';
import noth from "../images/nothingFound.png"

const Notification = ({ message }) => {
  return (
    <h2 className={css.notification}>
        
        <img src={noth} alt="nothingFound" />
        {message}
    </h2>
  );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;