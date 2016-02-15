module.exports = {
  calcTax: function (amount) {
    var tax = 0;
    if (amount < 11) {
      tax = (amount * 0.1);
      return tax;
    }
    if (amount < 21) {
      tax = ((amount - 10)* 0.07) + 1; //the fixed 10% from the first $10
      return tax;
    }
    if (amount < 31) {
      tax = ((amount - 20) * 0.05) + 1.7;
      return tax;
    }
    if (amount > 30) {
      tax = ((amount - 30)* 0.03) + 2.2;
      return tax;
    }
  }
}
