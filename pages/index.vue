<template>
  <div class="flex flex-col min-h-screen">
    <Slider />
    <Shop :products="products" :soppu="soppu" :hannu="hannu" :kaayi="kaayi" />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const { data: products, error } = await supabase
  .from("products")
  .select("*")
  .order("id", { ascending: true });

const kaayi = products.slice(0, 24);
const soppu = products.slice(24, 33);
const hannu = products.slice(24, 32);
console.log("kaayi:", kaayi);
console.log("soppu:", soppu);
console.log("hannu:", hannu);

if (error) {
  console.log(error);
} else {
  console.log("index.vue", products);
}

const description =
  "Hbhalli.com - Order vegetables everyday morning. 7 am delivery guaranteed";
const ogTitle = "Hbhalli.com - Order vegetables everyday!";
const twitterDescription = "Hbhalli.com - Order vegetables everyday!";
const image = "https://hbhalli.com/hbhalli.jpg";
const mySite = "https://hbhalli.com/";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: "og:site_name", content: mySite },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: mySite,
    },
    {
      property: "og:title",
      content: ogTitle,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/

    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: mySite,
    },
    {
      name: "twitter:title",
      content: ogTitle,
    },
    {
      name: "twitter:description",
      content: twitterDescription,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ],
});

import Shop from "../components/Shop.vue";
import Slider from "../components/Slider.vue";
</script>

<style>
div#__nuxt,
#__layout,
#__layout > div,
#app {
  min-height: 100vh;
}
</style>
