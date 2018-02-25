<template>
  <div id="app">
    <section class="section">
      <main class="container">
        <h1 class="title is-1">Case Converter</h1>

        <div class="columns">
          <div class="column">
            <h2 class="title is-3">Input</h2>
            <mode-select :modes="inputModes" v-model="inputMode" />
            <textarea
              class="textarea"
              :placeholder="inputPlaceholder"
              v-model="inputText"
            />
          </div>
          <div class="column">
            <h2 class="title is-3">Output</h2>
            <mode-select :modes="outputModes" v-model="outputMode" />
            <textarea
              class="textarea"
              :placeholder="outputPlaceholder"
              :value="outputText"
            />
          </div>
        </div>
      </main>
    </section>

    <footer class="footer">
      <div class="container">
        &copy; jshindo-gladd
      </div>
    </footer>
  </div>
</template>

<script>
import modeSelect from './components/mode-select.vue'
import Mode from './modules/Mode'
import decode from './modules/decode'
import encode from './modules/encode'

const inputModes = [
  new Mode('spaceSeparated', 'space separated'),
  new Mode('commaSeparated', 'comma,separated'),
  new Mode('camelCase', 'camelCase / PascalCase'),
  new Mode('snakeCase', 'snake_case'),
  new Mode('kebabCase', 'kebab-case')
]

const outputModes = [
  new Mode('upperCase', 'UPPER CASE'),
  new Mode('lowerCase', 'lower case'),
  new Mode('capitalizedCase', 'Capitalized Case'),
  new Mode('sentenceCase', 'Sentence case'),

  new Mode('camelCase', 'camelCase'),
  new Mode('pascalCase', 'PascalCase'),
  new Mode('snakeCase', 'snake_case'),
  new Mode('kebabCase', 'kebab-case')
]

export default {
  name: 'App',
  components: {
    modeSelect
  },
  data () {
    return {
      inputModes,
      outputModes,
      inputMode: inputModes[0].val,
      outputMode: outputModes[0].val,
      inputText: '',
      inputPlaceholder: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  },
  computed: {
    outputPlaceholder () {
      return this.inputPlaceholder
        .split(/\n/)
        .map(v => decode('spaceSeparated', v))
        .map(v => encode(this.outputMode, v)).join('\n')
    },
    outputText () {
      return this.inputText
        .split(/\n/)
        .map(v => decode(this.inputMode, v))
        .map(v => encode(this.outputMode, v)).join('\n')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.textarea {
  height: 20em;
  resize: none;
}

</style>
