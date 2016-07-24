/**
 * util/url-builder.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
const Url          = require('url');
const Path         = require('path');


function UrlBuilder(root, path) {

  /**
   * Construct the URL template
   */
  root = Url.parse(root);
  const template = Url.format({
    protocol: root.protocol,
    host: root.host,
    pathname: Path.join(root.pathname, path)
  });


  /**
   * Create a template function
   */
  const fn = params => template.replace(/:([_a-zA-Z][_a-zA-Z0-9]+)/g, i => {

    /* Remove the ':' marker */
    i = i.substr(1);

    /* Attempt to substitute the parameter, if not found panic */
    const value = params[i];
    if (!value) {
      throw new Error(`Missing URL parameter '${i}'`);
    }
    return value;
  });


  /**
   * Determine which URL params are used by the template function
   */
  fn.params = [ ];
  let match = null;
  const pattern = /:([_a-zA-Z][_a-zA-Z0-9]+)/g;
  while (true) {
    match = pattern.exec(template);
    if (!match) { break; }
    fn.params.push(match[0].substr(1));
  }

  return fn;

}
module.exports = UrlBuilder;
