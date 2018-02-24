<template>
  <section class="mode-select">
    <b-field position="is-centered">
      <b-radio-button
        v-for="modeName of modes"
        v-model="value"
        :native-value="modeName"
         size="is-small"
      >
        <span>{{ modeName }}</span>
      </b-radio-button>
    </b-field>
  </section>
</template>

<script>
export default {
  props: {
    modes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      value: this.modes[0],
    };
  },
  watch: {
    value(v) {
      this.$emit('input', v);
    },
  },
};
</script>

<style lang="scss">
.mode-select {
  margin-bottom: 4px;
}
</style>
