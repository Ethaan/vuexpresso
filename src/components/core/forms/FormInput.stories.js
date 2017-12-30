import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import FormInput from './FormInput';

storiesOf('FormInput', module)
  .add('default', () => ({
    template: `
      <FormInput
        placeholder="Hello from story"
        @input="input"
      ></FormInput>
    `,
    methods: {
      input: action('input'),
    },
    components: { FormInput },
    data: () => ({}),
  }));
