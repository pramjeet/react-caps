import React from 'react';
import PropTypes from 'prop-types';

const Confirm = props => (
  <div className="react-caps__list__confirm">
    <p className="react-caps__list__confirm__text">{props.text}</p>
    <div className="react-caps__list__confirm__btns">
      <button
        className="react-caps__list__confirm__cancel-btn"
        onClick={e => props.onCancelClick(e)}
      >
        Cancel
      </button>
      <button
        className="react-caps__list__confirm__confirm-btn"
        onClick={e => props.onConfirmClick(e)}
      >
        Confirm
      </button>
    </div>
    <style jsx>
      {`
        .react-caps__list__confirm {
          font-size: 12px;
          line-height: 16px;
        }

        .react-caps__list__confirm__text {
          margin: 0;
          padding: 20px;
        }

        .react-caps__list__confirm__btns button {
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
          display: inline-block;
          width: 50%;
          box-sizing: border-box;
          outline: none;
        }

        .react-caps__list__confirm__btns button:active {
          background-color: #f7f7f7;
        }

        .react-caps__list__confirm__btns button.react-caps__list__confirm__cancel-btn {
          border-right: 1px solid #eee;
          color: #d45757;
        }
      `}
    </style>
  </div>
);

Confirm.propTypes = {
  text: PropTypes.string.isRequired,
  onConfirmClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};
export default Confirm;
