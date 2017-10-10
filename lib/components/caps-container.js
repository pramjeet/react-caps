import React from 'react';
import Alert from './alert';
import Confirm from './confirm';
import Prompt from './prompt';

class Caps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caps: [],
    };
  }

  componentDidMount() {
    this.isReady = true;
    window.CapsReactRef = this;
  }

  addAlert = ({ text }) => {
    if (this.isReady) {
      const randomKey = Math.random()
        .toString(36)
        .substr(2, 5);
      const cap = {
        key: randomKey,
        component: (
          <Alert
            text={text}
            onOkClick={() => {
              this.removeCap(randomKey);
            }}
          />
        ),
      };
      const capsTemp = this.state.caps;
      capsTemp.push(cap);
      this.setState({
        caps: capsTemp,
      });
    }
  };

  addConfirm = ({ text, callback = null }) => {
    if (this.isReady) {
      const randomKey = Math.random()
        .toString(36)
        .substr(2, 5);
      const cap = {
        key: randomKey,
        component: (
          <Confirm
            text={text}
            onCancelClick={() => {
              this.removeCap(randomKey);
            }}
            onConfirmClick={(event) => {
              if (callback && typeof callback === 'function') {
                callback(event);
              }
              this.removeCap(randomKey);
            }}
          />
        ),
      };
      const capsTemp = this.state.caps;
      capsTemp.push(cap);
      this.setState({
        caps: capsTemp,
      });
    }
  };

  addPrompt = ({ label, callback = null }) => {
    if (this.isReady) {
      const randomKey = Math.random()
        .toString(36)
        .substr(2, 5);
      const cap = {
        key: randomKey,
        component: (
          <Prompt
            label={label}
            onCancelClick={() => {
              this.removeCap(randomKey);
            }}
            onConfirmClick={(value, event) => {
              if (callback && typeof callback === 'function') {
                callback(value, event);
              }
              this.removeCap(randomKey);
            }}
          />
        ),
      };
      const capsTemp = this.state.caps;
      capsTemp.push(cap);
      this.setState({
        caps: capsTemp,
      });
    }
  };

  removeCap = (key) => {
    const { caps } = this.state;
    const index = caps.findIndex(cap => cap.key === key);
    this.setState({
      caps: [...caps.slice(0, index), ...caps.slice(index + 1)],
    });
  };

  render() {
    if (this.state.caps.length > 0) {
      return (
        <div className="react-caps">
          <div className="react-caps__overlay" />
          <div className="react-caps__list">
            {this.state.caps.map(cap => (
              <div key={cap.key} className="react-caps__list__item">
                {cap.component}
              </div>
            ))}
          </div>
          <style jsx>
            {`
              .react-caps {
                position: fixed;
                width: 100%;
                height: 100%;
                z-index: 100000;
              }

              .react-caps__overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 0;
                background: rgba(0, 0, 0, 0.5);
              }

              .react-caps__list {
                position: relative;
              }

              .react-caps__list__item {
                dispaly: table;
                position: relative;
                background: #fff;
                margin: auto;
                width: 300px;
                margin-top: 20px;
                animation: cap-origin 0.2s;
                text-align: left;
                border-radius: 2px;
                box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
                box-sizing: border-box;
              }

              @keyframes cap-origin {
                0% {
                  transform: scale(0);
                }

                100% {
                  transform: scale(1);
                }
              }
            `}
          </style>
        </div>
      );
    }
    return null;
  }
}

export default Caps;
