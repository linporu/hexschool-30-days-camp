const TWDtoJPY = (numTWD) => {
  if (typeof numTWD === "string") {
    return "當我看不懂字串？？";
  }
  if (numTWD < 0) {
    return "...沒錢別來亂";
  }

  const TWDJPY = 0.32;
  const numJPY = parseInt(numTWD / TWDJPY);

  return `你換到的日幣有：${numJPY}`;
};

const TWDtoAnother = (numCurrency, currency) => {
  const TWDUSD = 29;
  const TWDHKD = 3;
  const TWDGBP = 35;
  const formatter = (TWD) => {
    return `${TWD}`;
  };

  switch (true) {
    case currency === "USD":
      return formatter(numCurrency * TWDUSD);
    case currency === "HKD":
      return formatter(numCurrency * TWDHKD);
    case currency === "GBP":
      return formatter(numCurrency * TWDGBP);
    default:
      return "...";
  }
};

