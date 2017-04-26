import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../mutation-types';

// initial state
// shape: [message]
const initialState = { message: null };

// getters
const getters = {
  getMessage: state => ({
    type: state.type,
    message: state.message,
  }),
};

// actions
const actions = {
  hideNotification({ commit } = {}) {
    commit(HIDE_NOTIFICATION);
  },
  showNotification({ commit }, { type = 'success', message } = {}) {
    commit(SHOW_NOTIFICATION, { type, message });
  },
};

// mutations
const mutations = {
  [SHOW_NOTIFICATION](state, { type, message }) {
    return Object.assign(state, {
      type,
      message,
    });
  },
  [HIDE_NOTIFICATION](state) {
    return Object.assign(state, {
      type: null,
      message: null,
    });
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
