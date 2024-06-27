export default class Currency {
  constructor(code, string) {
    this.code = code;
    this.string = string;
  }

  displayFullCurrency() {
    return `${this.string} (${this.code})`;
  }
}
