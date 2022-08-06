export const state = () => ({
  user: "",
  Theme: "",
  menu: false,
});

export const mutations = {
  user(state, data) {
    return (state.user = data);
  },
  Theme(state, data) {
    return (state.Theme = data);
  },
  menu(state, data) {
    return (state.menu = data);
  },
};

export const actions = {};

export const getters = {};
