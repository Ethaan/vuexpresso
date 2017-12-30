import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import NormalButton from './NormalButton';

storiesOf('NormalButton', module)
  .add('default', () => ({
    template: `
      <NormalButton
        @click="click"
      >
        Click Me
      </NormalButton>
    `,
    methods: {
      click: action('click'),
    },
    components: { NormalButton },
    data: () => ({}),
  }));
