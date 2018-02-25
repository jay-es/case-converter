<template>
  <section class="mode-select">
    <b-field position="is-centered">
      <b-radio-button
        v-for="(mode, i) of modes"
        :key="i"
        v-model="value"
        :native-value="mode.val"
        size="is-small"
      >
        <span>{{ mode.label }}</span>
      </b-radio-button>
    </b-field>
  </section>
</template>

<script>
export default {
  props: {
    modes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value (v) {
      this.$emit('input', v)
    }
  },
  mounted () {
    this.value = this.modes[0].val
  }
}
</script>

<style lang="scss">
.mode-select {
  margin-bottom: 4px;
}
</style>
