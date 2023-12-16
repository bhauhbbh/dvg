<script>
import Header from "../components/Header.vue";
import Flicking from "@egjs/vue3-flicking";
export default {
  components: {
    Header,
    Flicking,
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
  <!-- <LoadSpinner v-if="showHideSpinner" /> -->
  <div class="container mx-auto max-w-6xl">
    <!-- <div class="bg-white text-4xl font-bold overlay text-gogreen mx-auto flex h-screen">
      <div class="m-auto">
        <p class="text-center">We are updating site, please come back after sometime.</p>
      </div>
    </div> -->
    <NuxtPwaManifest />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
body {
  background: white;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  opacity: 0.9;
  z-index: 9999999;
}
</style>
