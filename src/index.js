/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
const Resource     = require('./resource');


function PexCard({
  // root = 'https://coreapi.pexcard.com/v4',
  root = 'https://corebeta.pexcard.com/api/v4',
  token
}) {


  /**
   * Allow non-constructor calls
   */
  if (!(this instanceof PexCard)) {
    return new PexCard({ root, token });
  }


  /**
   * We REALLY need that token
   */
  if (!token) {
    throw new Error("Missing parameter 'token'");
  }


  /**
   * Assign the information to this
   */
  this.root = root;
  this.headers = {
    Authorization: `token ${token}`
  };


  /**
   * Generate resources based on descriptions
   */
  this.business = Resource(this, require('./resources/business'), {
    admin: Resource(this, require('./resources/business/admin')),
    profile: Resource(this, require('./resources/business/profile')),
    transfer: Resource(this, require('./resources/business/transfer'))
  });

  this.card = Resource(this, require('./resources/card/index'), {
    profile: Resource(this, require('./resources/card/profile')),
    lowBalanceFundingRules: Resource(this, require('./resources/card/low-balance-funding')),
    scheduledFundingRules: Resource(this, require('./resources/card/scheduled-funding'))
  });

  this.bulk = Resource(this, require('./resources/bulk'));

  this.group = Resource(this, require('./resources/group'));

}
module.exports = PexCard;
