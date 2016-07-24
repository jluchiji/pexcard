/**
 * resource.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
const _            = require('lodash');
const Endpoint     = require('./endpoint');


function Resource(parent, config, children = { }) {

  if (!(this instanceof Resource)) {
    return new Resource(parent, config, children);
  }


  /**
   * Convert configuration data into endpoint factories
   */
  for (const key of Object.keys(config)) {
    this[key] = Endpoint(parent, config[key]);
  }
  for (const key of Object.keys(children)) {
    this[key] = children[key];
  }

}
module.exports = Resource;
