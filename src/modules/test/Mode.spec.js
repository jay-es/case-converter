import assert from 'assert'
import Mode from '../Mode'

describe('Mode', () => {
  describe('constructor', () => {
    const mode = new Mode('testVal', 'testLabel')

    it('val', () => {
      assert.strictEqual('testVal', mode.val)
    })

    it('label', () => {
      assert.strictEqual('testLabel', mode.label)
    })
  })
})
