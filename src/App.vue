<template>
  <div id="app">
    <section class="section">
      <main class="container">
        <h1 class="title is-1">Case Converter</h1>

        <div class="columns">
          <div class="column">
            <h2 class="title is-3">Input</h2>
            <mode-select :modes="modes" v-model="inputMode" />
            <textarea class="textarea" placeholder="" />
          </div>
          <div class="column">
            <h2 class="title is-3">Output</h2>
            <mode-select :modes="modes" v-model="outputMode" />
            <textarea class="textarea" placeholder="" />
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

const modes = [
  'space separated',
  'camelCase',
  'PascalCase',
  'snake_case',
  'kebab-case'
]

export default {
  name: 'App',
  components: {
    modeSelect
  },
  data () {
    return {
      modes,
      inputMode: modes[0],
      outputMode: modes[0]
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
