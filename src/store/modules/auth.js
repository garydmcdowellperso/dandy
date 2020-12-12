import axios from 'axios';

const state = {
    user: null,
};

const getters = {
    isAuthenticated: (state) => !!state.user,
};
const actions = {
    async LogIn({commit}, user) {
        console.log(user.email)
        console.log(user.password)
        await axios({
            method: 'post',
            url: 'v1/loginRequest', 
            data: {
                email: user.email,
                password: user.password
            }
        });
        await commit("setUser", user.email);
    },
    async LogOut({ commit }) {
        let user = null;
        commit("logout", user);
    },
};
const mutations = {
    setUser(state, username) {
        state.user = username;
    },
    logout(state, user) {
        state.user = user;
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};
