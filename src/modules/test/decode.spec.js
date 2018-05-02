import assert from 'assert'
import decode from '../decode'

describe('decode', () => {
  const output = ['foo', 'bar', 'baz']

  const tests = [
    ['commaSeparated', 'foo,bar,baz', output],
    ['spaceSeparated', 'foo bar baz', output],

    ['snakeCase', 'foo_bar_baz', output],
    ['kebabCase', 'foo-bar-baz', output],

    ['camelCase', 'fooBarBaz', ['foo', 'Bar', 'Baz']],
    ['camelCase', 'fooBARBaz', ['foo', 'BAR', 'Baz']],
    ['camelCase', 'FooBarBaz', ['Foo', 'Bar', 'Baz']]
  ]

  for (const [name, input, output] of tests) {
    it(name, () => {
      assert.deepStrictEqual(output, decode(name, input))
    })
  }
})
