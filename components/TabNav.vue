<template>
  <div class="tabs font-kannada items-center">
    <a
      class="tab py-7 md:lg:py-8 content-center text-slate-900 text-lg font-bold border-b-4 border-gray-300"
      :class="{ 'tab-active': activeTab === 'Tab1' }"
      :style="customStyle"
      @click="changeTab('Tab1')"
    >
      <img
        src="/carrot.png"
        alt="ತರಕಾರಿ"
        class="h-7 w-7 mr-2 grayscale opacity-90"
        :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab1' }"
        @click="changeTab('Tab1')"
      />
      ತರಕಾರಿ
    </a>

    <a
      class="tab py-7 md:lg:py-8 content-center text-slate-900 text-lg font-semibold border-b-4 border-gray-300"
      :class="{ 'tab-active border-b-4': activeTab === 'Tab2' }"
      :style="customStyle"
      @click="changeTab('Tab2')"
    >
      <img
        src="/organic.png"
        alt="ಸೊಪ್ಪು"
        class="h-8 w-8 mr-2 grayscale opacity-90"
        :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab2' }"
        @click="changeTab('Tab2')"
      />
      ಸೊಪ್ಪು</a
    >

    <button
      class="flex py-1 px-4 relative mb-2 bg-orange-400 border-2 border-transparent text-gray-800 rounded-full focus:outline-none transition duration-150 ease-in-out ml-5"
      aria-label="Cart"
      :class="{ 'tab-active': activeTab === 'Tab3' }"
      @click="changeTab('Tab3')"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
      <span class="text-md font-semibold font-poppins ml-2"> {{ cartItems.length }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TabNav",
  props: {
    changeTab: Function,
    activeTab: String,
    cartItems: Array,
    customStyle: Object,
  },
};
</script>

<style>
/* styles */
</style>
