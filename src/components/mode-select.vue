<template>
  <section class="mode-select">
    <b-field position="is-centered">
      <b-radio-button
        v-for="(mode, i) of modes"
        :key="i"
        :native-value="i"
        v-model="myValue"
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
    },
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      myValue: 0
    }
  },
  watch: {
    myValue (v) {
      this.$emit('input', v)
    },
    value (v) {
      this.myValue = v
    }
  }
}
</script>

<style lang="scss">
.mode-select {
  margin-bottom: 4px;
}
</style>
