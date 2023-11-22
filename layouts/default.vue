<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
  data() {
    return {
      showHideSpinner: true,
    };
  },
};
</script>

<template>
  <LoadSpinner v-if="showHideSpinner" />
  <div class="container mx-auto max-w-6xl border-x">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
body {
  background: white;
}
</style>
