import { play } from 'vue-play';
import FormInput from 'components/core/forms/FormInput';

const makeExample = () => `
  FormInput(
    v-bind:type="type"
    v-bind:value="value"
    v-bind:placeholder="placeholder"
    @input="onInput"
  )
`.trim();


const makeScenario = () => ({
  render(h) {
    const self = this;
    const style = { width: '50%' };
    return h(FormInput, {
      style,
      props: {
        placeholder: 'Test',
      },
      domProps: {
        value: self.value,
      },
      on: {
        input(input) {
          self.value = input;
          self.$log(input);
        },
      },
    });
  },
  data() {
    return {
      value: '',
    };
  },
  example: makeExample(),
});

play('FormInput')
.add('default', makeScenario());
