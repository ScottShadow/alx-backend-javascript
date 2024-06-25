import getBudgetObject from './7-getBudgetObject.js';// eslint-disable-line import/extensions

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: () => `$${income}`,
    getIncomeInEuros: () => `${income} euros`,
  };
  return fullBudget;
}
