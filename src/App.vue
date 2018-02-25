<template>
  <div id="app">
    <section class="section">
      <main class="container">
        <h1 class="title is-1">Case Converter</h1>

        <div class="columns">
          <div class="column">
            <h2 class="title is-3">Input</h2>
            <textarea class="textarea" placeholder="" />
            <mode-select :modes="inputModes" v-model="inputMode" />
          </div>
          <div class="column">
            <h2 class="title is-3">Output</h2>
            <textarea class="textarea" placeholder="" />
            <mode-select :modes="outputModes" v-model="outputMode" />
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
