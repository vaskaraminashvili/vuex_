<template>
  <button @click="login" v-if="!isLoggedIn">Log IN</button>
  <button @click="logout" v-else>Log Out</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // login() {
    //   this.$store.dispatch('login');
    // },
    // logout() {
    //   this.$store.dispatch('logout');
    // }
    ...mapActions(['login', 'logout'])
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.userLoggedIn;
    }
  }
};
</script>

<style></style>
