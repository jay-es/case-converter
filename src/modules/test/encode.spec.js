import assert from 'assert'
import encode from '../encode'

describe('encode', () => {
  const input = ['foo', 'Bar', 'baz']

  const tests = [
    ['upperCase', 'FOO BAR BAZ'],
    ['lowerCase', 'foo bar baz'],
    ['sentenceCase', 'Foo bar baz'],
    ['capitalizedCase', 'Foo Bar Baz'],

    ['pascalCase', 'FooBarBaz'],
    ['camelCase', 'fooBarBaz'],

    ['snakeCase', 'foo_Bar_baz'],
    ['upperSnakeCase', 'FOO_BAR_BAZ'],
    ['lowerSnakeCase', 'foo_bar_baz'],

    ['kebabCase', 'foo-Bar-baz'],
    ['upperKebabCase', 'FOO-BAR-BAZ'],
    ['lowerKebabCase', 'foo-bar-baz'],

    ['commaSeparated', 'foo,Bar,baz']
  ]

  for (const [name, output] of tests) {
    it(name, () => {
      assert.deepStrictEqual(output, encode(name, input))
    })
  }
})
