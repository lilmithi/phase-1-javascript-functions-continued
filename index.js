function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
function wrapAdjective(symbol = "*") {
  return function (emphatic) {
    return `You are ${symbol}${emphatic}${symbol}!`;
  };
}
