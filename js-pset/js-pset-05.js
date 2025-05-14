const checkAdult = (age) => {
  if (age === undefined || age === null || age === "" || isNaN(Number(age))) {
    return "年齡輸入錯誤";
  }

  if (age >= 18) {
    return "成年";
  } else {
    return "未成年";
  }
};

const canSex = (age, gender) => {
  if (age === undefined || age === null || age === "" || isNaN(Number(age))) {
    return "年齡輸入錯誤";
  }

  if (age >= 16) {
    return "可以色色";
  } else {
    return "你還不行哦～";
  }
};

const buy = (price) => {
  if (
    price === undefined ||
    price === null ||
    price === "" ||
    isNaN(Number(price))
  ) {
    return "價格輸入錯誤";
  }
  const discount = 50;
  const discountThreshold = 300;
  const discountedPrice = price - discount;

  switch (true) {
    case price > discountThreshold:
      return `符合優惠券資格，費用是 ${discountedPrice}`;
    case price === discountThreshold:
      return `剛好符合資格，費用是 ${discountedPrice}`;
    case 0 < price < discountThreshold:
      return `不符合優惠券資格，費用是 ${price}`;
    case price === 0:
      return `...你來亂的嗎？`;
    case price < 0:
      return `再鬧我就生氣了哦~`;
    default:
      return `無效的價格`;
  }
};

const isPrime = (num) => {
  const maxNum = 100;

  if (num === undefined || num === null || num === "" || isNaN(Number(num))) {
    return "數字輸入錯誤";
  }
  if (num < 0) {
    return "無法判別";
  }
  if (num > maxNum) {
    return `我只能算 ${maxNum} 以內的質數計算，原諒我QQ`;
  }
  if (num === 0 || num === 1) {
    return `不是質數`;
  }

  const squareRoot = parseInt(num ** 0.5);

  for (i = 2; i <= squareRoot; i++) {
    if (num % i === 0) {
      return `不是質數`;
    }
  }
  return `是質數`;
};
