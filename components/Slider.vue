<template>
  <div class="bg-slate-100">
    <div class="p-3 md:lg:w-[700px] mx-auto">
      <swiper
        :spaceBetween="10"
        :centeredSlides="true"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: false,
        }"
        :loop="true"
        :modules="modules"
        class="mySwiper"
        placeholder="[1200, 400]"
      >
        <swiper-slide>
          <nuxt-img
            src="/slider.webp"
            :placeholder="[1200, 400]"
            alt="slider"
            loading="lazy"
            class="rounded-xl w-[500] h-[400]"
          />
        </swiper-slide>
        <swiper-slide>
          <nuxt-img
            src="/slider2.webp"
            :placeholder="[1200, 400]"
            alt="slider"
            loading="lazy"
            class="rounded-xl w-[500] h-[400]"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 25%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
