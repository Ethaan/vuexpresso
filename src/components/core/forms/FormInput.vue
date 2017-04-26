<template lang="jade">
  input(
    v-bind:type="type"
    v-bind:value="value"
    v-bind:placeholder="placeholder"
    @input="onInput"
  )
</template>

<script>
// Emits:
// 'input', String

export default {
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: null,
    placeholder: String,
  },
};
</script>
