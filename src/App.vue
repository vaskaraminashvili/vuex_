<template>
  <base-container title="Vuex" v-if="userLoggedIn">
    <favorite-value></favorite-value>
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>

  <base-container title="user auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import TheCounter from './components/TheCounter.vue';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    TheCounter,
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },

  methods: {
    addOne() {
      this.$store.commit('increase', { value: 10 });
    }
  },
  computed: {
    ...mapGetters(['userLoggedIn'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
