/**
 * resources/transfer.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  list: {
    method: 'GET',
    path: '/Business/OneTimeTransfer'
  },

  create: {
    method: 'POST',
    path: '/Business/OneTimeTransfer'
  },

  delete: {
    method: 'DELETE',
    path: '/Business/OneTimeTransfer/:id'
  }

};
