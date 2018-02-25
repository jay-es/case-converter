<template>
  <div id="app">
    <section class="section">
      <main class="container">
        <h1 class="title is-1">Case Converter</h1>

        <div class="columns">
          <div class="column">
            <h2 class="title is-3">Input</h2>
            <mode-select v-model="inputMode" :modes="inputModes" />
            <textarea
              v-model="inputText"
              :placeholder="inputPlaceholder"
              class="textarea"
            />
          </div>
          <div class="column">
            <h2 class="title is-3">Output</h2>
            <mode-select v-model="outputMode" :modes="outputModes" />
            <textarea
              :placeholder="outputPlaceholder"
              :value="outputText"
              class="textarea"
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
  new Mode('kebabCase', 'kebab-case'),

  new Mode('commaSeparated', 'comma,separated')
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
      inputMode: 0,
      outputMode: 0,
      inputText: '',
      inputPlaceholder: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  },
  computed: {
    outputPlaceholder () {
      return this.convert(this.inputPlaceholder, 0)
    },
    outputText () {
      return this.convert(this.inputText, this.inputMode)
    }
  },
  watch: {
    inputText (newVal) {
      this.inputMode = this.detectModeIndex(newVal)
    }
  },
  methods: {
    convert (inputText, inputMode) {
      return inputText
        .split(/\n/)
        .map(v => inputModes[inputMode].decode(v))
        .map(v => outputModes[this.outputMode].encode(v))
        .join('\n')
    },
    detectModeIndex (inputText) {
      const lines = inputText.split('\n')
      const counts = inputModes.map(mode =>
        lines.reduce((acc, line) => acc + mode.decode(line).length, 0)
      )
      const maxCount = Math.max(...counts)
      return counts.findIndex(v => v === maxCount)
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
