const { tracker } = require('../utils');

module.exports = ({ timeMs }) => {
  const timeSec = Math.floor(timeMs / 1000);
  const timeMin = Math.floor(timeMs / 60000);

  tracker.track('success', {
    timeMs,
    timeSec,
    timeMin
  });
};
