/**
 * resources/admin.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  list: {
    method: 'GET',
    path: '/Business/Admin'
  },

  get: {
    method: 'GET',
    path: '/Business/Admin/:id',
    params: ['id']
  },

  create: {
    method: 'POST',
    path: '/Business/Admin'
  },

  delete: {
    method: 'DELETE',
    path: '/Business/Admin/:id',
    params: ['id']
  },

  update: {
    method: 'PUT',
    path: '/Business/Admin/:id',
    params: ['id']
  }

};
