/**
 * group.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  create: {
    method: 'POST',
    path: '/Group'
  },

  list: {
    method: 'GET',
    path: '/Group'
  },

  update: {
    method: 'PUT',
    path: '/Group/:id',
    params: ['id']
  },

  delete: {
    method: 'DELETE',
    path: '/Group/:id',
    params: ['id']
  }

};
