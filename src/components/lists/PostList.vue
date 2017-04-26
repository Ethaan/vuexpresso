<template lang="jade">
  ul.post-list
    PostItem(
      v-for="post in posts"
      v-bind:key="post._id"
      v-bind:post="post"
      @deletePost="$emit('deletePost', post._id)"
    )
</template>

<script>
import PostItem from './PostItem';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      defualt: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
