import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
const p2 = new Pricing(Pricing.convertPrice(p.amount, 1.06), new Currency('$', 'USD'));
console.log(p);
console.log(p2);
console.log(p.displayFullPrice());
console.log(p2.displayFullPrice());
