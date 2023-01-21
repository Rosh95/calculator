const OPERTAION = {
  sum: '+',
  substract: '-',
  multiply: '*',
  divide: '/',
};

function calculate({ a, b, operation }) {
  let result = null;

  switch (operation) {
    case OPERTAION.sum:
      result = sum(a, b);
      break;

    case OPERTAION.substract:
      result = substract(a, b);
      break;

    case OPERTAION.multiply:
      result = multiply(a, b);
      break;

    case OPERTAION.divide:
      result = divide(a, b);
      break;

    default:
      break;
  }
  return result;
}
