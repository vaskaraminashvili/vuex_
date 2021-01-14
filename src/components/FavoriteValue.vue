<template>
  <h3>{{ counter }}</h3>
  <p>whe do more here</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    }
  }
};
</script>

<style></style>
