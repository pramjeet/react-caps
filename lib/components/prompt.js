import React from 'react';
import PropTypes from 'prop-types';

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    return (
      <div className="react-caps__list__prompt">
        <div className="react-caps__list__prompt__content">
          <p className="react-caps__list__prompt__text">{this.props.label}</p>
          <input
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            ref={(ref) => {
              this.inputRef = ref;
            }}
            className="react-caps__list__prompt__input"
          />
        </div>
        <div className="react-caps__list__prompt__btns">
          <button
            className="react-caps__list__prompt__cancel-btn"
            onClick={e => this.props.onCancelClick(e)}
          >
            Cancel
          </button>
          <button
            className="react-caps__list__prompt__prompt-btn"
            onClick={e => this.props.onConfirmClick(this.state.value, e)}
          >
            ok
          </button>
        </div>
        <style jsx>
          {`
            .react-caps__list__prompt {
              font-size: 12px;
              line-height: 16px;
            }

            .react-caps__list__prompt__content {
              padding: 15px 20px;
            }

            .react-caps__list__prompt__text {
              margin: 0;
            }

            .react-caps__list__prompt__input {
              width: 100%;
              margin-top: 10px;
              padding: 7px;
              border-radius: 3px;
              border: 1px solid #8c8c8c;
              box-sizing: border-box;
              outline: none;
            }

            .react-caps__list__prompt__input:focus {
              border-color: #1b8ee0;
              box-shadow: 0 0 3px rgba(0, 0, 255, 0.5);
            }

            .react-caps__list__prompt__btns button {
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

            .react-caps__list__prompt__btns button:active {
              background-color: #f7f7f7;
            }

            .react-caps__list__prompt__btns button.react-caps__list__prompt__cancel-btn {
              border-right: 1px solid #eee;
              color: #d45757;
            }
          `}
        </style>
      </div>
    );
  }
}

Prompt.propTypes = {
  label: PropTypes.string.isRequired,
  onConfirmClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};
export default Prompt;
