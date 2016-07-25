/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
const RestKit      = require('rest-kit');


module.exports = RestKit({

  root:            'https://coreapi.pexcard.com/v4'

}, {

  required:        ['token'],
  oncreate:        require('./hooks/oncreate'),
  pre:             require('./hooks/pre')

}, {

  business:        RestKit.Resource(require('./resources/business'), {
    admin:         RestKit.Resource(require('./resources/business/admin')),
    profile:       RestKit.Resource(require('./resources/business/profile')),
    transfer:      RestKit.Resource(require('./resources/business/transfer'))
  }),

  card:            RestKit.Resource(require('./resources/card'), {
    profile:       RestKit.Resource(require('./resources/card/profile')),
    funding:       RestKit.Resource({ }, {
      lowBalance:  RestKit.Resource(require('./resources/card/funding/low-balance')),
      scheduled:   RestKit.Resource(require('./resources/card/funding/scheduled'))
    })
  }),

  bulk:            RestKit.Resource(require('./resources/bulk'), {
    spending:      RestKit.Resource(require('./resources/bulk/spending')),
    funding:       RestKit.Resource({ }, {
      lowBalance:  RestKit.Resource(require('./resources/bulk/funding/low-balance')),
      scheduled:   RestKit.Resource(require('./resources/bulk/funding/scheduled'))
    })
  }),

  group:           RestKit.Resource(require('./resources/group'))

});
