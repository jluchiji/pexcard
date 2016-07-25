/**
 * resources/bulk/index.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  fund: {
    method: 'PUT',
    path: '/Bulk/FundAllCards',
    params: ['amount']
  },

  zero: {
    method: 'POST',
    path: '/Bulk/Zero'
  }

};
