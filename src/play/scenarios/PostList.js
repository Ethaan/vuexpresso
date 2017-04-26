import { play } from 'vue-play';
import PostList from 'components/lists/PostList';
import Fake from '../fake';

const makeExample = () => `
  PostList(
    v-bind:posts="posts"
    @deletePost="onDeletePost"
  )
`.trim();

const makeScenario = () => ({
  render(h) {
    const self = this;
    return h(PostList, {
      props: {
        posts: Fake.posts(4),
      },
      on: {
        deletePost(_id) {
          self.$log(`deleting post with _id: ${_id}`);
        },
      },
    });
  },
  example: makeExample(),
});

play('PostList')
  .add('default', makeScenario());
