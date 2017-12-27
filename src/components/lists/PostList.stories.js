import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import PostList from './PostList';

storiesOf('PostList', module)
  .add('default', () => ({
    template: `
      <PostList
        :posts="posts"
        @deletePost="deletePost"
      ></PostList>
    `,
    methods: {
      deletePost: action('deletePost'),
    },
    components: { PostList },
    data: () => ({
      posts: [
        {
          _id: 1,
          title: 'Test Title 1',
        },
        {
          _id: 2,
          title: 'Test Title 2',
        },
      ],
    }),
  }));
