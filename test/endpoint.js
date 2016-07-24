/**
 * test/endpoint.spec.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
const test         = require('ava');

const Endpoint     = require('../src/endpoint');


test(async t => {

  const ep = Endpoint({
    root: 'https://echo.getpostman.com',
    headers: {
      Authorization: 'basic 1234'
    }
  }, {
    method: 'GET',
    path: '/headers'
  });


  const response = await ep({ id: 123 });


  t.is(response.headers.authorization, 'basic 1234');


});
