/**
 * hooks/oncreate.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */

function oncreate() {
  const token = this.config$.token;
  this.config$.headers.Authorization = `token ${token}`;

  delete this.config$.token;
}
module.exports = oncreate;
