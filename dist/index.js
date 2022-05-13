
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./zonudex-sdk.cjs.production.min.js')
} else {
  module.exports = require('./zonudex-sdk.cjs.development.js')
}
