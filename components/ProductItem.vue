<template>
  <div class="lg:p-0 md:p-0">
    <div
      class="relative mx-auto flex max-w-xs flex-col overflow-hidden rounded-md border border-slate-200 bg-white"
    >
      <a class="relative rounded-t-md flex overflow-hidden">
        <!-- <img :src="`${product.image}`" class="object-cover" /> -->
        <nuxt-img 
        :src="`${product.image}`" :placeholder="[250, 200]"
        :alt="`${product.title}`"
        sizes="100vw sm:50vw md:400px"
        
/>
          
        <span
          class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
          >{{product.priceCut}}% OFF</span
        >
      </a>
      <div class="mt-2 p-4 md:lg:mt-4 md:lg:px-5 md:lg:pb-6">
          <h5 class="text-base tracking-tight font-bold font-kannada text-gray-900">
            {{ product.title }}
          </h5>  
          
               
        <div class="mt-2 lg:md:mb-5 flex items-center justify-between">
      
            <span class="text-lg md:lg:text-xl font-bold text-gogreen font-poppins"
              >₹{{ product.price }}</span>
         
          <div v-if="product.isKilogram">
          <div class="flex">
            <select
              id="quantity"
              data-te-select-init
              v-model="product.selectedQuantity"
              class="bg-gray-50 border md:lg:border-2 border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1.5 lg:p-2.5 md:p-2.5"
            >          
              <option
                v-for="quantity in availableQuantities"
                :key="quantity"
                :value="quantity"
                class="font-poppins"
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
              class="bg-gray-50 border md:lg:border-2 border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1.5 lg:p-2.5 md:p-2.5"
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
    </div>


        <button
          @click="toggleCart"
          class="flex w-full whitespace-nowrap items-center mt-4 justify-center rounded-full py-1 text-center font-semibold md:text-md font-poppins"
          :class="
            isInCart ? 'bg-red-100 text-red-600 hover:bg-red-100 hover:text-red-600' : 'ring-2 ring-gogreen ring-inset text-black md:lg:hover:bg-gogreen'
          "
        > 
          {{ isInCart ? 'Remove' : 'Add' }}
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
