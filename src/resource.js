/**
 * resource.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
const _            = require('lodash');
const Endpoint     = require('./endpoint');


function Resource(parent, config, children = { }) {

  /**
   * Convert configuration data into endpoint factories
   */
  const factories = { };
  for (const key of Object.keys(config)) {
    factories[key] = Endpoint(parent, config[key]);
  }
  _.assign(factories, children);


  /**
   * The function version of the Resource object
   */
  const fn = (args) => _.mapValues(factories, i => i(args));


  /**
   * Non-carried versions
   */
  const resolved = _.mapValues(factories, i => i({ }));
  _.assign(fn, resolved);


  return fn;
}
module.exports = Resource;
