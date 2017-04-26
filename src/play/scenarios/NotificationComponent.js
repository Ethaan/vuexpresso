import { play } from 'vue-play';
import NotificationComponent from 'components/core/NotificationComponent';

const makeExample = ({ type, message }) => `
  NotificationComponent(
    v-bind:type="${type}"
    v-bind:message="${message}"
  )
`.trim();


const makeScenario = (props = {}) => ({
  render(h) {
    return h(NotificationComponent, {
      props,
    });
  },
  example: makeExample(props),
});

const scenarios = play('NotificationComponent');
const ERROR_TYPES = ['error', 'success'];

/*eslint-disable */
for (const type of ERROR_TYPES) {
  const scenario = makeScenario({ message: 'message', type });
  scenarios.add(`with type ${type}`, scenario);
}
/*eslint-enable */
