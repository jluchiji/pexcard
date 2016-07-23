/**
 * resources/card/low-balance-funding.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  get: {
    method: 'GET',
    path: '/Card/LowBalanceFundingRules/:id'
  },

  set: {
    method: 'PUT',
    path: '/Card/LowBalanceFundingRules/:id'
  },

  delete: {
    method: 'DELETE',
    path: '/Card/LowBalanceFundingRules/:id'
  }

};
