import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import CreatePostForm from './CreatePostForm';

storiesOf('CreatePostForm', module)
  .add('default', () => ({
    template: `
      <CreatePostForm
        @submit="submit"
      ></CreatePostForm>
    `,
    methods: {
      submit: action('submit'),
    },
    components: { CreatePostForm },
  }));
