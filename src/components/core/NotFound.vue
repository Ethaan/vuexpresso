<template lang="jade">
  .not-found
    h1 {{ message }}
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Not Found...',
    },
  },
};
</script>
