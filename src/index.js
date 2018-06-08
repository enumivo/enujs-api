const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const EnuApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  EnuApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change EnuApi.Testnet(..) to just EnuApi(..)')
      return EnuApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change EnuApi.Localnet(..) to just EnuApi(..)')
      return EnuApi(config)
    }
  }
)

module.exports = EnuApi
