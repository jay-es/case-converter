import Vue from 'vue'
import assert from 'assert'
import App from '../App.vue'

describe('App', () => {
  const Constructor = Vue.extend(App)

  describe('detectModeIndex', () => {
    const vm = new Constructor().$mount()

    const tests = [
      ['commaSeparated', 'a,b,c,d'],
      ['spaceSeparated', 'a b c d'],

      ['snakeCase', 'a_b_c_d'],
      ['snakeCase', 'A_B_C_D'],
      ['kebabCase', 'a-b-c-d'],
      ['kebabCase', 'A-B-C-D'],

      ['camelCase', 'AaBbCcDd']
    ]

    for (const [name, input] of tests) {
      it(name, () => {
        const index = vm.detectModeIndex(input)
        assert.strictEqual(name, vm.inputModes[index].val)
      })
    }
  })
})
