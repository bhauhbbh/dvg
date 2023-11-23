<template>
  <div class="container p-6 h-screen">
    <div class="p-3 mx-auto">
      <ul class="custom-list">
        <li>
          ರಾತ್ರಿವರೆಗೂ ಆರ್ಡರ್ ಮಾಡಬಹುದು ಮತ್ತು ಪಡೆಯಿರಿ ತಾಜಾ ತರಕಾರಿ/ಸೊಪ್ಪು ಮರುದಿನ ಬೆಳಗ್ಗೆ 7
          ಗಂಟೆಗೆ.
        </li>
        <li>ಆರ್ಡರ್ ಮಾಡುವಾಗ ತಪ್ಪದೆ ವಾಟ್ಸಾಪ್‌ಲಿ ವಿಳಾಸ ನಮೂದಿಸಿ.</li>
        <li>ಡೆಲಿವರಿ ನಂತರ ಆರ್ಡರ್ ಮೊತ್ತವನ್ನು PhonePe ಮಾಡಿ.</li>
        <li>ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗೆ ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ:</li>
      </ul>
    </div>

    <div class="flex flex-col items-start">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
      >
        <a
          href="https://api.whatsapp.com/send?phone=917899050992"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="text-white">Feedback / Enquiry </span>
        </a>
      </button>

      <button
        type="button"
        v-on:click="activeTab = 'Tab1'"
        class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
      >
        <NuxtLink class="whitespace-nowrap" to="/"> Keep shopping </NuxtLink>
      </button>
    </div>
  </div>
</template>
<script></script>

<style scoped>
/* Define a CSS rule for styling text inside <li> elements in a <ul> */
ul.custom-list {
  list-style-type: disc;
  /* Change the bullet style */
}

ul.custom-list li {
  color: #2e2e2e;
  font-size: 16px;
  /* Change font size */
  font-family: "Noto Sans Kannada", sans-serif;
  /* Change font family */
  margin-bottom: 10px;
  /* Add some margin below each <li> */
}
</style>

<script></script>
