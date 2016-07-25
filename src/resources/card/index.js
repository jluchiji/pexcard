/**
 * resources/card/index.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
module.exports = {

  activate: {
    method: 'POST',
    path: '/Card/Activate/:id',
    params: ['id']
  },

  create: {
    method: 'POST',
    path: '/Card/Create'
  },

  fund: {
    method: 'POST',
    path: '/Card/Fund/:id',
    params: [ 'id', 'amount' ]
  },

  terminate: {
    method: 'POST',
    path: '/Card/Terminate/:id',
    params: ['id']
  },

  zero: {
    method: 'POST',
    path: '/Card/Zero/:id',
    params: ['id']
  },

  setGroup: {
    method: 'PUT',
    path: '/Card/SetGroup',
    params: [ 'acctId', 'groupId' ]
  },

  setPin: {
    method: 'PUT',
    path: '/Card/SetPin/:id',
    params: [ 'id', 'pin' ]
  },

  setStatus: {
    method: 'PUT',
    path: '/Card/Status/:id',
    params: [ 'id', 'status' ]
  },

  details: {
    method: 'GET',
    path: '/Details/AccountDetails/:id',
    params: ['id']
  },

  transactions: {
    method: 'GET',
    path: '/Details/TransactionDetails/:id',
    params: [ 'id', 'from', 'to' ],
    query: {
      from: 'StartDate',
      to: 'EndDate'
    }
  }

};
