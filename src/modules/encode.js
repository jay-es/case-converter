const toLowerCase = text => text.toLowerCase()
const toUpperCase = text => text.toUpperCase()
const toCapitalizedCase = text => text[0].toUpperCase() + text.substr(1).toLowerCase()
const toCamelCase = (text, index) => !index ? text.toLowerCase() : toCapitalizedCase(text)
const toSentenceCase = (text, index) => !index ? toCapitalizedCase(text) : text.toLowerCase()

export default (mode, words) => {
  switch (mode) {
    // case 'spaceSeparated': return words.join(' ')
    case 'upperCase': return words.map(toUpperCase).join(' ')
    case 'lowerCase': return words.map(toLowerCase).join(' ')
    case 'capitalizedCase': return words.map(toCapitalizedCase).join(' ')
    case 'sentenceCase': return words.map(toSentenceCase).join(' ')

    case 'camelCase': return words.map(toCamelCase).join('')
    case 'PascalCase': return words.map(toCapitalizedCase).join('')
    case 'snakeCase': return words.map(toLowerCase).join('_')
    case 'kebabCase': return words.map(toLowerCase).join('-')
  }

  // commaSeparated
  return words.join()
}