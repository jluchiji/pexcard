/**
 * resources/bulk/funding/scheduled.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  set: {
    method: 'PUT',
    path: '/Bulk/SetAllCardsScheduledFunding',
    params: [ 'thresholdAmount', 'amount' ]
  },

  remove: {
    method: 'DELETE',
    path: '/Bulk/RemoveAllCardsScheduledFunding'
  }

};
