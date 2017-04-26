import { play } from 'vue-play';
import NotFound from 'components/core/NotFound';

const makeExample = ({ message = 'Not Found...' }) => `
  NotFound(
    v-bind:message="${message}"
  )
`.trim();


const makeScenario = (props = {}) => ({
  render(h) {
    const style = { width: '50%' };
    return h('div', { style }, [
      h(NotFound, {
        props,
      }),
    ]);
  },
  example: makeExample(props),
});

play('NotFound')
.add('with default message', makeScenario())
.add('with custom message', makeScenario({ message: 'Custom message' }));
