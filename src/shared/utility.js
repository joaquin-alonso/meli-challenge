export const formatPriceAmount = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const formatPriceDecimals = num => {
  return ('0' + num).slice(-2);
};
