const Transaction = requireFrom('model/transaction')
const blockchain = requireFrom('core/blockchainManager').getInstance()
const arkjs = require('arkjs')
const config = requireFrom('core/config')

module.exports = (model) => {
  const lastBlock = blockchain.status.lastBlock
  const data = Transaction.deserialize(model.serialized.toString('hex'))

  return {
    id: data.id,
    blockid: model.blockId,
    type: data.type,
    timestamp: data.timestamp,
    amount: data.amount,
    fee: data.fee,
    recipientId: data.recipientId,
    senderId: arkjs.crypto.getAddress(data.senderPublicKey, config.network.pubKeyHash),
    senderPublicKey: data.senderPublicKey,
    signature: data.signature,
    asset: data.asset,
    confirmations: lastBlock ? lastBlock.data.height - model.block.height : 0
  }
}