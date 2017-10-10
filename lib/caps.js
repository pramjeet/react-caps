const caps = {
  alert: (text) => {
    window.CapsReactRef.addAlert({ text });
  },
  confirm: (text, callback = null) => {
    window.CapsReactRef.addConfirm({ text, callback });
  },
  prompt: (label, callback = null) => {
    window.CapsReactRef.addPrompt({ label, callback });
  },
};

module.exports = caps;
export default caps;
