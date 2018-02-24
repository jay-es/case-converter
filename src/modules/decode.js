export default (mode, text) => {
  switch (mode) {
    case 'commaSeparated': return text.split(',')
    case 'spaceSeparated': return text.split(' ')

    case 'snakeCase': return text.split('_')
    case 'kebabCase': return text.split('-')

    case 'camelCase': return text.split(/([A-Z]?[a-z]+)/).filter(v => v)
  }

  return text.split()
}
