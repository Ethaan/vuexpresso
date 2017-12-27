import Vue from 'vue';
import Vuex from 'vuex';
import { configure } from '@storybook/vue';
import '../src/css';

Vue.use(Vuex);

const req = require.context('../src/components', true, /\.stories\.js$/);

const loadStories = () =>
  req.keys().forEach(filename => req(filename));

configure(loadStories, module);
