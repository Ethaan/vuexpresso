import { play } from 'vue-play';
import NormalButton from 'components/core/buttons/NormalButton';

const makeExample = () => `
  NormalButton(
    v-bind:type="type"
    @click="onClick"
  )
`.trim();


const makeScenario = (props = {}) => ({
  render(h) {
    const self = this;
    const style = { width: '50%' };
    return h('div', { style }, [
      h(NormalButton, {
        props,
        on: {
          click() { self.$log('click'); },
        },
      }, 'Submit'),
    ]);
  },
  example: makeExample(),
});

play('NormalButton')
.add('default', makeScenario());
