import { storiesOf } from '@storybook/vue';
import NotFound from './NotFound';

const makeStory = (props = '') => () => ({
  template: `
    <NotFound ${props}></NotFound>
  `,
  components: { NotFound },
});

storiesOf('NotFound', module)
  .add('default', makeStory())
  .add('with message', makeStory('message="Message custom"'));
