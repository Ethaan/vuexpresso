<template lang="jade">
  li.post-item
    span {{ post.title }}
    NormalButton(
      @click.prevent="$emit('deletePost')"
    ) Remove
</template>

<script>
// Emits:
// 'deletePost', id
import NormalButton from 'components/core/buttons/NormalButton';

export default {
  components: { NormalButton },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="stylus" scoped>
.post-item
  width: 70%
  display: flex
  justify-content: space-between

  > span
    font-weight: 600
</style>
