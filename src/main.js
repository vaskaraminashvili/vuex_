import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
// Create a new store instance.
const store = createStore({
  state() {
    return {
      counter: 0,
      userLoggedIn: false
    };
  },
  mutations: {
    incerment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    login(state) {
      state.userLoggedIn = true;
    },
    logout(state) {
      state.userLoggedIn = false;
    }
  },
  actions: {
    incerment(context) {
      setTimeout(() => {
        context.commit('incerment');
      }, 2000);
    },
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    userLoggedIn(state) {
      return state.userLoggedIn;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);
app.mount('#app');
