import assert from 'assert'
import decode from '../decode'

describe('decode', () => {
  const output = ['foo', 'bar', 'baz']

  it('spaceSeparated', () => {
    const input = 'foo bar baz'
    assert.deepStrictEqual(output, decode('spaceSeparated', input))
  })

  it('commaSeparated', () => {
    const input = 'foo,bar,baz'
    assert.deepStrictEqual(output, decode('commaSeparated', input))
  })

  it('camelCase', () => {
    const input = 'fooBarBaz'
    const output = ['foo', 'Bar', 'Baz']
    assert.deepStrictEqual(output, decode('camelCase', input))
  })

  it('camelCase', () => {
    const input = 'sendHTMLMail'
    const output = ['send', 'HTML', 'Mail']
    assert.deepStrictEqual(output, decode('camelCase', input))
  })

  it('PascalCase', () => {
    const input = 'FooBarBaz'
    const output = ['Foo', 'Bar', 'Baz']
    assert.deepStrictEqual(output, decode('camelCase', input))
  })
  it('snakeCase', () => {
    const input = 'foo_bar_baz'
    assert.deepStrictEqual(output, decode('snakeCase', input))
  })

  it('kebabCase', () => {
    const input = 'foo-bar-baz'
    assert.deepStrictEqual(output, decode('kebabCase', input))
  })
})
