const checkStringLength = (string) => {
  return string.length;
};

const lowerCase = (string) => {
  return string.toLowerCase();
};

const trimString = (string) => {
  return string.trim();
};

const splitString = (string) => {
  return string.split(",");
};

const getArea = (address) => {
  const idxCity = address.indexOf("市");
  const idxArea = address.indexOf("區");
  return address.slice(idxCity + 1, idxArea + 1);
};
