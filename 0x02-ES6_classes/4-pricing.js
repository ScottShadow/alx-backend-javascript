import Currency from './3-currency';

/**
 * Represents a pricing object
 * @class
 * @exports Pricing
 */
export default class Pricing {
  /**
   * @constructor
   * @param {number} amount - The price amount
   * @param {Currency} currency - The currency object
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Get the price amount
   * @returns {number} The price amount
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the price amount
   * @param {number} newAmount - The new price amount
   */
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = newAmount;
  }

  /**
   * Get the currency object
   * @returns {Currency} The currency object
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency object
   * @param {Currency} newCurrency - The new currency object
   */
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  /**
   * Display the full price
   * @returns {string} The full price
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Convert the price
   * @param {number} amount - The amount to convert
   * @param {number} conversionRate - The conversion rate
   * @returns {number} The converted price
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
