<template lang="jade">
  form.create-post-form
    FromInput.full-width-item(
      v-model="title"
      placeholder="Add a new Post"
    )
    NormalButton.full-width-item(
      type="submit"
      @click.prevent="onSubmitPost"
    ) Submit
</template>

<script>
import FromInput from 'components/core/forms/FormInput';
import NormalButton from 'components/core/buttons/NormalButton';

export default {
  components: { FromInput, NormalButton },
  methods: {
    onSubmitPost() {
      const { title } = this;
      this.$emit('submit', { title });
    },
  },
  data() {
    return { title: null };
  },
};
</script>

<style lang="stylus" scoped>
.create-post-form
  margin-top: 1em

.full-width-item
  width: 100%

</style>
