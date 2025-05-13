const higher = (num1, num2) => {
  return num1 > num2;
};

const booleanToggle = (bool) => {
  return !bool;
};

const checkType = (input) => {
  return typeof input;
};

const onSale = (price) => {
  return price * 0.8 > 100;
};

const checkVIP = (num, isVip) => {
  return num > 200 && isVip;
};
