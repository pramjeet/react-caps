import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => (
  <div className="react-caps__list__alert">
    <p className="react-caps__list__alert__text">{props.text}</p>
    <button className="react-caps__list__alert__ok" onClick={e => props.onOkClick(e)}>
      Ok
    </button>
    <style jsx>
      {`
        .react-caps__list__alert {
          font-size: 12px;
          line-height: 16px;
          display: flex;
        }

        .react-caps__list__alert__text {
          margin: 0;
          flex-grow: 1;
          padding: 20px;
        }

        .react-caps__list__alert__ok {
          margin: 0;
          flex-basis: 60px;
          padding: 5px;
          border: none;
          background: transparent;
          border: none;
          background: transparent;
          border-left: 1px solid #eee;
          text-transform: uppercase;
          vertical-align: middle;
          cursor: pointer;
          color: #34ab5a;
          align-self: stretch;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
        }

        .react-caps__list__alert__ok:active {
          background-color: #f7f7f7;
        }
      `}
    </style>
  </div>
);

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  onOkClick: PropTypes.func.isRequired,
};
export default Alert;
