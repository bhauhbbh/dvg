<template>
  <div class="lg:p-0 md:p-0">
    <div
      class="relative mx-auto flex max-w-xs flex-col overflow-hidden rounded-xl bg-white"
    >
      <a class="relative rounded-t-md flex overflow-hidden">
        <!-- <img :src="`${product.image}`" class="object-cover" /> -->
        <nuxt-img
          :src="`${product.image}`"
          :placeholder="[250, 200]"
          :alt="`${product.title}`"
          class="w-[500] h-[400] lazy"
        />
      </a>
      <div class="p-4 md:lg:mt-2 md:lg:px-5 md:lg:pb-6">
        <h5 class="text-base tracking-tight font-bold font-kannada text-gray-900">
          {{ product.title }}
        </h5>

        <div class="mt-2 lg:md:mb-5 w-full flex items-center justify-between">
          <div class="block">
            <span
              class="block leading-3 text-lg md:lg:text-xl font-bold text-gogreen font-poppins"
              ><span>₹</span>{{ product.price }}</span
            >

            <span
              v-show="product.priceCut > 0"
              class="block text-left text-md font-bold text-black"
              ><s>₹{{ product.priceCut }}</s></span
            >
          </div>

          <div class="block">
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
                  v-model="product.selectedQuantity"
                  @change="validateMinQuantity"
                  class="bg-gray-50 border md:lg:border-2 border-gray-300 text-gray-900 text-base font-normal rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1.5 lg:p-2.5 md:p-2.5"
                >
                  <option
                    v-for="quantity in filteredQuantities"
                    :key="quantity"
                    :value="quantity"
                  >
                    {{ quantity }} unit{{ quantity === 1 ? "" : "s" }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="toggleCart"
          class="flex w-full whitespace-nowrap items-center mt-4 justify-center rounded-full py-1 text-center font-semibold md:text-md font-poppins"
          :class="
            isInCart
              ? 'bg-red-100 text-red-600 hover:bg-red-100 hover:text-red-600'
              : 'ring-2 ring-gogreen ring-inset text-black md:lg:hover:bg-gogreen'
          "
        >
          {{ isInCart ? "Remove" : "Add" }}
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
        : this.availableQuantities.filter((q) => q !== 0.5);
    },
  },
  methods: {
    toggleCart() {
      if (this.isInCart) {
        this.$emit("remove-from-cart", this.product);
      } else {
        this.$emit("add-to-cart", this.product);
      }
    },
    validateMinQuantity() {
      if (this.product.selectedQuantity < 1) {
        this.product.selectedQuantity = 1; // Set it to the minimum value of 1 unit
        console.log(this.product.selectedQuantity);
      }
    },
  },
};
</script>

<style>
s,
strike {
  text-decoration: none;
  position: relative;
}
s::before,
strike::before {
  top: 50%; /*tweak this to adjust the vertical position if it's off a bit due to your font family */
  background: #000; /*this is the color of the line*/
  opacity: 0.9;
  content: "";
  width: 118%;
  position: absolute;
  height: 0.1em;
  border-radius: 0.1em;
  left: -5%;
  white-space: nowrap;
  display: block;
  transform: rotate(-18deg);
}
s.straight::before,
strike.straight::before {
  transform: rotate(0deg);
  left: -1%;
  width: 102%;
}
</style>
