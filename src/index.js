/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
const RestKit      = require('rest-kit');


module.exports = RestKit({
  // root: 'https://coreapi.pexcard.com/v4',
  root: 'https://corebeta.pexcard.com/api/v4',
  pre: require('./hooks/pre')
}, {
  required: ['token'],
  oncreate: require('./hooks/oncreate')
}, {

  business:        RestKit.Resource(require('./resources/business'), {
    admin:         RestKit.Resource(require('./resources/business/admin')),
    profile:       RestKit.Resource(require('./resources/business/profile')),
    transfer:      RestKit.Resource(require('./resources/business/transfer'))
  }),

  card:            RestKit.Resource(require('./resources/card'), {
    profile:       RestKit.Resource(require('./resources/card/profile')),
    funding:       RestKit.Resource({ }, {
      lowBalance:  RestKit.Resource(require('./resources/card/low-balance-funding')),
      scheduled:   RestKit.Resource(require('./resources/card/scheduled-funding'))
    })
  }),

  bulk:            RestKit.Resource(require('./resources/bulk')),

  group:           RestKit.Resource(require('./resources/group'))

});
