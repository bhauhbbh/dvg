<template>
  <div class="lg:p-0 md:p-0">
    <div
      class="relative mx-auto flex max-w-xs flex-col overflow-hidden rounded-xl bg-white"
    >
      <a class="relative rounded-t-xl flex overflow-hidden">
        <!-- <img :src="`${product.image}`" class="object-cover" /> -->
        <nuxt-img
        :src="`${product.image}`"
        :alt="`${product.title}`"
        height="400" width="500"
/>
          
        <span
          class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
          >{{product.priceCut}}% OFF</span
        >
      </a>
      <div class="mt-2 px-2 pb-2 md:lg:mt-4 md:lg:px-5 md:lg:pb-5">
          <h5 class="text-base tracking-tight font-bold text-slate-900" style="font-family: 'Noto Sans Kannada', sans-serif;">
            {{ product.title }}
          </h5>       
        <div class="mt-2 mb-3 lg:md:mb-5 flex items-center justify-between">
      
            <span class="text-lg md:lg:text-xl font-bold text-slate-900"
              >₹{{ product.price }}</span>
         
          <div v-if="product.isKilogram">
          <div class="flex">
            <select
              id="quantity"
              data-te-select-init
              v-model="product.selectedQuantity"
              class="bg-gray-50 border md:lg:border-2  border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1.5 lg:p-2.5 md:p-2.5"
            >          
              <option
                v-for="quantity in availableQuantities"
                :key="quantity"
                :value="quantity"
              >
                {{ quantity }} kg
              </option>
              
            </select>
          </div>
        </div>

        <div v-else>
          <div class="flex">
            <select
              id="quantity" 
              data-te-select-init
              v-model="product.selectedQuantity" @change="validateMinQuantity"
              class="bg-gray-50 border md:lg:border-2  border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1.5 lg:p-2.5 md:p-2.5"
            >
              <option
                v-for="quantity in filteredQuantities"
                :key="quantity"
                :value="quantity"
              >
              {{ quantity }} unit{{ quantity === 1 ? '' : 's' }}
              </option>
            </select>
          </div>
        </div>
      

<!-- begitables ends -->
      </div>
        <button
          @click="toggleCart"
          class="flex w-full whitespace-nowrap items-center justify-center rounded-md py-2 my-2 text-center text-base md:text-xl font-"
          :class="
            isInCart ? 'bg-red-100 text-red-600' : 'bg-emerald-500 text-white'
          "
        >
        <div class="md:lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          </div>
          
          {{ isInCart ? 'Remove' : 'Add to Cart' }}
        </button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    product: Object,
    cartItems: Array, // Pass in the cart items from the parent component
  },
  data() {
    return {
      availableQuantities: [0.5, 1, 2, 3, 4, 5],
    };
  },
  computed: {
    isInCart() {
      return this.cartItems.some((item) => item.id === this.product.id);
    },
   
  //   write code for remove 0.5 from selected quantity if product has iskilogram:false?  

    

    filteredQuantities() {
    return this.product.isKilogram
      ? this.availableQuantities
      : this.availableQuantities.filter(q => q !== 0.5);
  },
  },
  methods: {
    toggleCart() {
      if (this.isInCart) {
        this.$emit('remove-from-cart', this.product);
      } else {
        this.$emit('add-to-cart', this.product);
      }
    },
    validateMinQuantity() {
    if (this.product.selectedQuantity < 1) {
      this.product.selectedQuantity = 1; // Set it to the minimum value of 1 unit
      console.log(this.product.selectedQuantity)
    }
  }
  },
};
</script>
