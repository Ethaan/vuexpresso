import { play } from 'vue-play';
import CreatePostForm from 'components/posts/CreatePostForm';

const makeExample = () => `
  CreatePostForm(
    @submit="onSubmitPost"
  )
`.trim();

const makeScenario = () => ({
  render(h) {
    const self = this;
    return h(CreatePostForm, {
      domProps: {
        title: self.title,
      },
      on: {
        submit(data) {
          self.$log('submit');
          self.$log(data);
        },
      },
    });
  },
  data() {
    return {
      title: '',
    };
  },
  example: makeExample(),
});

play('CreatePostForm')
  .add('default', makeScenario());
