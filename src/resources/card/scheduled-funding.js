/**
 * resources/card/scheduled-funding.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  get: {
    method: 'GET',
    path: '/Card/ScheduledFundingRules/:id',
    params: ['id']
  },

  set: {
    method: 'PUT',
    path: '/Card/ScheduledFundingRules/:id',
    params: ['id']
  },

  delete: {
    method: 'DELETE',
    path: '/Card/ScheduledFundingRules/:id',
    params: ['id']
  }

};
