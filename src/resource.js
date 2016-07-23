/**
 * resource.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
const Endpoint     = require('./endpoint');


function Resource(parent, config, children = { }) {

  /* Allow non-constructor calls */
  if (!(this instanceof Resource)) {
    return new Resource(parent, config, children);
  }


  /**
   * Define endpoints
   */
  for (const key of Object.keys(config)) {
    this[key] = Endpoint(parent, config[key]);
  }


  /**
   * Attach child resources
   */
  for (const key of Object.keys(children)) {
    this[key] = children[key];
  }


}
module.exports = Resource;
