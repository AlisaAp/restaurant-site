const getTotalPrice = (basket) => {
  const res = basket.reduce((sum, elem) => sum + elem.price * elem.amount, 0);
  return `total price: ${res} ₴`;
};
export default getTotalPrice;
