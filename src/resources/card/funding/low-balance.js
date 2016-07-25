/**
 * resources/card/funding/low-balance-funding.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  get: {
    method: 'GET',
    path: '/Card/LowBalanceFundingRules/:id',
    params: ['id']
  },

  set: {
    method: 'PUT',
    path: '/Card/LowBalanceFundingRules/:id',
    params: ['id']
  },

  delete: {
    method: 'DELETE',
    path: '/Card/LowBalanceFundingRules/:id',
    params: ['id']
  }

};
