<template>
  <div class="navbar sticky top-0 z-50 bg-white justify-between border-b-2">
    <div class="flex-1">
      <nuxt-link to="https://hbhalli.com/" class="flex items-center justify-center">
        <img src="/hbhalli.webp" alt="Icon" class="w-6 h-6 mr-1" />
        <span class="text-lg font-semibold text-slate-900 font-poppins">hbhalli.com</span>
      </nuxt-link>
    </div>

    <div class="">
      <NuxtLink
        to="/about"
        class="btn info btn-link text-black content-center font-semibold text-base focus:ring-violet-300 font-kannada"
        >ಹೆಚ್ಚಿನ ಮಾಹಿತಿ</NuxtLink
      >
    </div>
  </div>
  <div class="bg-gogreen p-2 text-white font-bold text-center">
    <span class="font-kannada font-bold">ತರಕಾರಿ ಡೆಲಿವರಿ ಸಮಯ : ಬೆಳಗ್ಗೆ 7 ಗಂಟೆಗೆ</span>
  </div>
</template>
