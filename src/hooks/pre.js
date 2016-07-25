/**
 * hooks/pre.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */
const _            = require('lodash');


function pre(req) {

  /* Capitalize all param names */
  req.body = _.mapKeys(req.body, (v, k) => _.capitalize(k));
  req.qs = _.mapKeys(req.qs, (v, k) => _.capitalize(k));

}
module.exports = pre;
