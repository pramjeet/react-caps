import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => (
  <div className="react-caps__alert">
    <p className="react-caps__alert__text">{props.text}</p>
    <button className="react-caps__alert__ok" onClick={e => props.onOkClick(e)}>
      Ok
    </button>
    <style jsx>
      {`
        .react-caps__alert {
          font-size: 12px;
          line-height: 16px;
        }

        .react-caps__alert__text {
          margin: 0;
          padding: 20px;
        }

        .react-caps__alert__btns {
        }

        .react-caps__alert__ok {
          margin: 0;
          padding: 10px 5px;
          border: none;
          background: transparent;
          border: none;
          background: transparent;
          border-top: 1px solid #eee;
          text-transform: uppercase;
          cursor: pointer;
          color: #34ab5a;
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
        }

        .react-caps__alert__ok:active {
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
