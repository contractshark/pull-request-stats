const DAY_IN_SEC = 24 * 60 * 60 * 1000;

module.exports = (date, days) => {
  return new Date(date.getTime() - days * DAY_IN_SEC);
};
