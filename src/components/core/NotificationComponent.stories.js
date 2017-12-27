// TODO Figure out vuex stories

/* import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import NotificationComponent from './NotificationComponent';

const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

const makeStory = (props = '') => () => ({
  template: `
    <NotificationComponent ${props}></NotificationComponent>
  `,
  store: new Vuex.Store({
    state: { count: 0 },
    actions: {
      hideNotification({ commit } = {}) {
        commit(HIDE_NOTIFICATION);
      },
    },
    mutations: {
      [HIDE_NOTIFICATION](state) {
        return Object.assign(state, {
          type: null,
          message: null,
        });
      },
    },
  }),
  components: { NotificationComponent },
});

const stories = storiesOf('NotificationComponent', module);

const ERROR_TYPES = ['error', 'success'];

// /*eslint-disable */
// for (const type of ERROR_TYPES) {
//  const story = makeStory(`message='Message ${type}' type="${type}"`);
//  stories.add(`with type: ${type}`, story);
// }
/* eslint-enabled */
