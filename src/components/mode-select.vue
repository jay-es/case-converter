<template>
  <section class="mode-select">
    <b-radio
      v-for="(mode, i) of modes"
      v-model="myValue"
      :key="i"
      :native-value="i"
    >
      <span>{{ mode.label }}</span>
    </b-radio>
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
  margin-right: -1em;
  margin-bottom: -.75em;
}
.b-radio.radio {
  margin-right: 1em;
  margin-bottom: .75em;

  & + & {
    margin-left: 0;
  }
  .control-label {
    padding-left: 0.33em;
  }
}
</style>
