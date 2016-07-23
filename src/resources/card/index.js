/**
 * resources/card/index.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  activate: {
    method: 'POST',
    path: '/Card/Activate/:id'
  },

  create: {
    method: 'POST',
    path: '/Card/Create'
  },

  fund: {
    method: 'POST',
    path: '/Card/Fund/:id'
  },

  terminate: {
    method: 'POST',
    path: '/Card/Terminate/:id'
  },

  zero: {
    method: 'POST',
    path: '/Card/Zero/:id'
  },

  setGroup: {
    method: 'PUT',
    path: '/Card/SetGroup'
  },

  setPin: {
    method: 'PUT',
    path: '/Card/SetPin/:id'
  },

  setStatus: {
    method: 'PUT',
    path: '/Card/Status/:id'
  },

  details: {
    method: 'GET',
    path: '/Details/AccountDetails/:id'
  },

  transactions: {
    method: 'GET',
    path: '/Details/TransactionDetails/:id'
  }

};
