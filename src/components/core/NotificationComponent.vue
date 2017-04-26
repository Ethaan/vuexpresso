<template lang="jade">
  .notification
    p(v-bind:class="`notification-${type}`") {{ message }}
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('hideNotification');
    }, 2500);
  },
  props: {
    type: {
      type: String,
      default: 'success',
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~css/imports/colors'

.notification > p
  font-size: 0.9em
  font-style: italic
  text-align: center

.notification-success
  color: $notifications.$success

.notification-error
  color: $notifications.$error
</style>
