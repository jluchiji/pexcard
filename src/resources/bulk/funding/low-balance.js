/**
 * resources/bulk/funding/low-balance.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  set: {
    method: 'PUT',
    path: '/Bulk/SetAllCardsLowBalanceFunding',
    params: [ 'thresholdAmount', 'amount' ]
  },

  remove: {
    method: 'DELETE',
    path: '/Bulk/RemoveAllCardsLowBalanceFunding'
  }

};
