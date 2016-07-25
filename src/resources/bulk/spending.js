/**
 * resources/bulk/spending.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  list: {
    method: 'GET',
    path: '/Bulk/GetSpendingRulesets'
  },

  set: {
    method: 'PUT',
    path: '/Bulk/SetAllCardsSpendingRuleset',
    params: ['rulesetId']
  }

};
