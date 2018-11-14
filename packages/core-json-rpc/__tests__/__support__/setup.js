const container = require('@phantomchain/core-container')
const containerHelper = require('@phantomchain/core-test-utils/lib/helpers/container')

jest.setTimeout(60000)

exports.setUp = async () => {
  process.env.PHANTOM_JSON_RPC_ENABLED = true

  await containerHelper.setUp({
    exclude: [
      '@phantomchain/core-api',
      '@phantomchain/core-webhooks',
      '@phantomchain/core-graphql',
      '@phantomchain/core-forger',
    ],
  })
}

exports.tearDown = async () => {
  await container.tearDown()
}
