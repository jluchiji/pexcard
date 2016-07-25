/**
 * resources/card/profile.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  get: {
    method: 'GET',
    path: '/Card/Profile/:id',
    params: ['id']
  },

  update: {
    method: 'PUT',
    path: '/Card/Profile/:id',
    params: ['id']
  }

};
