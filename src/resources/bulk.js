/**
 * resources/bulk.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */


exports.removeAllCardsLowBalanceFunding = {
  method: 'DELETE',
  path: '/Bulk/RemoveAllCardsLowBalanceFunding'
};

exports.removeAllCardsScheduledFunding = {
  method: 'DELETE',
  path: '/Bulk/RemoveAllCardsScheduledFunding'
};

exports.getSpendingRulesets = {
  method: 'GET',
  path: '/Bulk/GetSpendingRulesets'
};

exports.zero = {
  method: 'POST',
  path: '/Bulk/Zero'
};

exports.fundAllCards = {
  method: 'PUT',
  path: '/Bulk/FundAllCards'
};

exports.setAllCardsLowBalanceFunding = {
  method: 'PUT',
  path: '/Bulk/SetAllCardsLowBalanceFunding'
};

exports.setAllCardsScheduledFunding = {
  method: 'PUT',
  path: '/Bulk/SetAllCardsScheduledFunding'
};

exports.setAllCardsSpendingRuleset = {
  method: 'PUT',
  path: '/Bulk/SetAllCardsSpendingRuleset'
};
