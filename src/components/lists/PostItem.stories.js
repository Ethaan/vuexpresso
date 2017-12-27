import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import PostItem from './PostItem';

storiesOf('PostItem', module)
  .add('default', () => ({
    template: `
      <PostItem
        :post="post"
        @deletePost="deletePost"
      ></PostItem>
    `,
    methods: {
      deletePost: action('deletePost'),
    },
    components: { PostItem },
    data: () => ({
      post: {
        _id: 1,
        title: 'Test Title',
      },
    }),
  }));
