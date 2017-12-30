<template lang="jade">
  button(
    v-bind:type="type"
    @click="onClick"
  )
    slot
</template>

<script>
// Emits:
// 'click', DomEvent

export default {
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
