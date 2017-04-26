import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import notifications from './modules/notifications';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: debug,
  modules: { notifications },
  plugins: debug ? [createLogger()] : [],
});
