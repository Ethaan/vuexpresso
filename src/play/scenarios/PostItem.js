import { play } from 'vue-play';
import PostItem from 'components/lists/PostItem';
import Fake from '../fake';

const makeExample = () => `
  PostItem(
    v-bind:post="post"
  )
`.trim();

const makeScenario = () => ({
  render(h) {
    const post = Fake.post();
    const self = this;
    return h(PostItem, {
      props: {
        post,
      },
      on: {
        deletePost() {
          self.$log(`deleting post with _id ${post._id}`);
        },
      },
    });
  },
  example: makeExample(),
});

play('PostItem')
  .add('default', makeScenario());
