/**
 * hooks/oncreate.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */

function oncreate() {
  const token = this.config$.token;
  this.config$.headers.Authorization = `token ${token}`;

  delete this.config$.token;
}
module.exports = oncreate;
