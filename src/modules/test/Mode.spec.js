import assert from 'assert'
import Mode from '../Mode'
import decode from '../decode'
import encode from '../encode'

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

  describe('decode', () => {
    it('spaceSeparated', () => {
      const input = 'foo bar baz'
      assert.deepStrictEqual(
        decode('spaceSeparated', input),
        new Mode('spaceSeparated').decode(input)
      )
    })

    it('camelCase', () => {
      const input = 'fooBarBaz'
      assert.deepStrictEqual(
        decode('camelCase', input),
        new Mode('camelCase').decode(input)
      )
    })
  })

  describe('encode', () => {
    const input = ['foo', 'bar', 'baz']

    it('commaSeparated', () => {
      assert.deepStrictEqual(
        encode('commaSeparated', input),
        new Mode('commaSeparated').encode(input)
      )
    })

    it('camelCase', () => {
      assert.deepStrictEqual(
        encode('camelCase', input),
        new Mode('camelCase').encode(input)
      )
    })
  })
})
