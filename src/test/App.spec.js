import Vue from 'vue'
import assert from 'assert'
import App from '../App.vue'

describe('App', () => {
  const Constructor = Vue.extend(App)

  describe('detectModeIndex', () => {
    const vm = new Constructor().$mount()

    const detectModeName = (inputText) => {
      const index = vm.detectModeIndex(inputText)
      return vm.inputModes[index].val
    }

    it('spaceSeparated', () => {
      assert.strictEqual('spaceSeparated', detectModeName('a b c d'))
    })
    it('commaSeparated', () => {
      assert.strictEqual('commaSeparated', detectModeName('a,b,c,d'))
    })
    it('camelCase', () => {
      assert.strictEqual('camelCase', detectModeName('AaBbCcDd'))
    })
    it('snakeCase', () => {
      assert.strictEqual('snakeCase', detectModeName('a_b_c_d'))
    })
    it('kebabCase', () => {
      assert.strictEqual('kebabCase', detectModeName('a-b-c-d'))
    })
  })
})
