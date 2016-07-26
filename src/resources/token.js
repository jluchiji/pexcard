/**
 * resources/token.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  get: {
    method: 'GET',
    path: '/Token'
  },

  list: {
    method: 'GET',
    path: '/Token/GetAuthTokens'
  },

  renew: {
    method: 'POST',
    path: '/Token/Renew'
  },

  revoke: {
    method: 'DELETE',
    path: '/Token'
  }

};
