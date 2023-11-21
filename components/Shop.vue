<template>
  <div class="container mx-auto" style="background-color:#F8FAFC">
    <div>

      <div class="sticky top-14 z-50 bg-white">
        <div class="tabs font-kannada items-center">
          <a class="tab tab-bordered py-7 md:lg:py-8 content-center text-slate-900 text-lg font-semibold"
            :class="{ 'tab-active text-green-600': activeTab === 'Tab1' }" @click="changeTab('Tab1')"> <img
              src="/carrot.png" alt="ತರಕಾರಿ" class="h-7 w-7 mr-2 grayscale opacity-90"
              :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab1' }" @click="changeTab('Tab1')"> ತರಕಾರಿ</a>
          <a class="tab tab-bordered py-7 md:lg:py-8 content-center text-slate-900 text-lg font-semibold"
            :class="{ 'tab-active text-green-600': activeTab === 'Tab2' }" @click="changeTab('Tab2')"> <img
              src="/organic.png" alt="ಸೊಪ್ಪು" class="h-8 w-8 mr-2 grayscale opacity-90"
              :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab2' }" @click="changeTab('Tab1')"> ಸೊಪ್ಪು</a>



          <button
            class="flex py-1 px-4 relative bg-orange-400 border-2 border-transparent text-gray-800 rounded-full focus:outline-none transition duration-150 ease-in-out"
            aria-label="Cart" :class="{ 'tab-active text-green-600': activeTab === 'Tab3' }" @click="changeTab('Tab3')">
            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
              </path>
            </svg>
            <span class="text-md font-semibold font-poppins ml-2"> {{ cartItems.length }}</span>
          </button>


        </div>
      </div>


      <div v-if="activeTab === 'Tab1'">
        <!-- Content for Tab 1 -->
        <div class="grid grid-cols-2 gap-2 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
          <ProductItem v-for="product in kilogramProducts" :key="product.id" :product="product" :cartItems="cartItems"
            @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
        </div>
      </div>
      <div v-show="activeTab === 'Tab2'">
        <!-- Content for Tab 2 -->
        <div class="grid grid-cols-2 gap-2 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
          <ProductItem v-for="product in unitProducts" :key="product.id" :product="product" :cartItems="cartItems"
            @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
        </div>
      </div>
      <div v-if="activeTab === 'Tab3'">
        <!-- Content for Tab 3 -->
        <div class="bg-white font-poppins ">
          <div v-if="cartItems.length">
            <div class="relative p-3 flex-auto">
              <div class="mb-3 text-black">Minimum order amount is : <span class="font-bold">₹ {{ minCartValue }}</span>
              </div>
              <div class="bg-white rounded-lg">
                <table class="w-full md:lg:max-w-xl text-black text-md font-normal">
                  <thead class="bg-gray-200 text-slate-700">
                    <tr>
                      <th class="text-left">Item</th>
                      <th class="text-left">Quantity</th>
                      <th class="text-left">Total</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in cartItems" :key="item.id" class="border-b border-gray-300 h-9">
                      <td> <span class="font-kannada"> {{ item.title }}</span> · <span class="font-poppins">₹{{ item.price
                      }}</span> </td>
                      <td class="text-left">
                        {{ item.isKilogram ? `${item.selectedQuantity} kg` : `${item.selectedQuantity}` }}
                      </td>
                      <td>₹{{ item.selectedQuantity * item.price }}</td>
                      <td class="text-right">
                        <button @click="removeFromCart(item)" class="px-2 py-1 bg-red-500 text-white text-sm rounded-md">
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>

                </table>
                <div class="mt-4">
                  <table>
                    <tbody>
                      <tr>
                        <td class="pr-4 text-lg font-semibold text-black"> Delivery Charge : </td>
                        <td class="text-lg font-semibold text-black">0</td>
                      </tr>
                      <tr>
                        <td class="text-lg font-semibold text-black">Sub total : </td>
                        <td class="text-lg font-semibold text-black">₹ {{ calculateTotalPrice() }}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div class="flex mt-4">



                <div class="flex flex-col place-items-start">

                  <button @click="orderViaWhatsApp" class="text-white bg-green-700 font-bold py-2 px-4 rounded-full mb-4"
                    :class="{ 'opacity-50 cursor-not-allowed': parseFloat(calculateTotalPrice()) < 250, }"
                    :disabled="parseFloat(calculateTotalPrice()) < minCartValue">
                    Order on whatsapp
                  </button>

                  <button type="button" v-on:click="activeTab = 'Tab1'"
                    class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
                    Keep shopping
                  </button>

                </div>

              </div>
              <div class="divider"></div>

              <div class="flex items-center my-10 justify-center bg-white">
                <p class="text-center text-xl">If you are on pc/laptop, login to whatsapp web & click on <span
                    class="font-bold">Continue to Chat</span></p>
              </div>

              <div class="divider"></div>
              <div class="flex items-center justify-center">
                <img src="/bag.png" alt="" class="h-28">
              </div>
            </div>
          </div>
          <div v-else>
            <div class="flex items-center justify-center">
              <div class="flex flex-col items-center p-2">
                <div>
                  <p class="text-xl font-bold mt-6">Your cart is empty!</p>
                </div>
                <div>
                  <img src="/empty-cart.webp" class="h-56" alt="">
                </div>
                <div class="mt-4">
                  <button type="button" v-on:click="activeTab = 'Tab1'"
                    class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
                    <NuxtLink class="whitespace-nowrap" to="/">
                      Back to shopping
                    </NuxtLink>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import ProductItem from '~/components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      showKilogram: true,
      showModal: false,
      tab: ['Tab1'],
      activeTab: 'Tab1',
      minCartValue: 250,
      products: [
        {
          id: 1,
          title: 'ಈರುಳ್ಳಿ',
          price: 35.0,
          image: 'onion.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 8,
        },
        {
          id: 2,
          title: 'ಮೆಣಸಿನಕಾಯಿ',
          price: 58.0,
          image: 'chilli.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 10,
        },
        {
          id: 3,
          title: 'ಮೆಣಸಿನಕಾಯಿ(ದಪ್ಪ)',
          price: 58.0,
          image: 'chilli2.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 10,
        },
        {
          id: 4,
          title: 'ಟೊಮೊಟೊ ',
          price: 10.0,
          image: 'tomato.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 12,
        },
        {
          id: 5,
          title: 'ಆಲೂಗಡ್ಡೆ ',
          price: 38.0,
          image: 'potato.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 10,
        },
        {
          id: 6,
          title: 'ಬದನೆಕಾಯಿ',
          price: 38.0,
          image: 'brinjal.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 8,
        },
        {
          id: 7,
          title: 'ಮೂಲಂಗಿ(4)',
          price: 19.0,
          image: 'radish.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 9,
        },
        {
          id: 8,
          title: 'ಬೀಟ್ರೂಟ್',
          price: 58.0,
          image: 'beetroot.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 10,
        },
        {
          id: 9,
          title: 'ಬೆಂಡೆಕಾಯಿ',
          price: 28.0,
          image: 'bendekai.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 12,
        },
        {
          id: 10,
          title: 'ಹೂಕೋಸು',
          price: 36.0,
          image: 'cauliflower.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 5,
        },
        {
          id: 11,
          title: 'ಎಲೆಕೋಸು',
          price: 35.0,
          image: 'cabbage.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 5,
        },
        {
          id: 12,
          title: 'ಹೀರೆಕಾಯಿ',
          price: 38.0,
          image: 'heerekai.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 6,
        },
        {
          id: 13,
          title: 'ಸೌತೆಕಾಯಿ',
          price: 38.0,
          image: 'cucmber.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 6,
        },
        {
          id: 14,
          title: 'ಕ್ಯಾರೆಟ್',
          price: 68.0,
          image: 'carrot.webp',
          selectedQuantity: 1,
          isKilogram: true,
          priceCut: 2,
        },
        {
          id: 15,
          title: 'ಕರಿಬೇವು',
          price: 5.0,
          image: 'karibevu.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 8,
        },
        {
          id: 16,
          title: 'ಸಬ್ಬಸಿಗೆ',
          price: 5.0,
          image: 'sabbe.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 5,
        },
        {
          id: 17,
          title: 'ಕೊತ್ತಂಬರಿ',
          price: 5.0,
          image: 'kottambari.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 5,
        },
        {
          id: 18,
          title: 'ಮೆಂತ್ಯೆ',
          price: 5.0,
          image: 'mente.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 5,
        },
        {
          id: 19,
          title: 'ಪುದಿನ',
          price: 8.0,
          image: 'pudina.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 5,
        },
        {
          id: 20,
          title: 'ಪಾಲಕ್',
          price: 5.0,
          image: 'palak.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 5,
        },
        {
          id: 21,
          title: 'ಹಸಿ ಶುಂಠಿ',
          price: 10.0,
          image: 'shunti.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 5,
        },
        {
          id: 22,
          title: 'ನಿಂಬೆಹಣ್ಣು(3)',
          price: 10.0,
          image: 'lemon.webp',
          selectedQuantity: 1,
          isKilogram: false,
          priceCut: 5,
        },

        // Add more products here
      ],
      cartItems: [],
    };
  },
  computed: {
    kilogramProducts() {
      // Filter products with isKilogram: true
      return this.products.filter((product) => product.isKilogram === true);
    },
    unitProducts() {
      // Filter products with isKilogram: false
      return this.products.filter((product) => product.isKilogram === false);
    },
  },
  methods: {
    addToCart(product) {
      // Check if the item is already in the cart
      const existingItem = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        existingItem.selectedQuantity += product.selectedQuantity;
      } else {
        // If the item is not in the cart, add it
        this.cartItems.push({
          id: product.id,
          title: product.title,
          selectedQuantity: product.selectedQuantity,
          price: product.price,
          isKilogram: product.isKilogram,
        });
      }
    },
    removeFromCart(item) {
      const index = this.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    calculateTotalPrice() {
      return this.cartItems
        .reduce((total, item) => {
          return total + item.price * item.selectedQuantity;
        }, 0)
        .toFixed(2);
    },
    orderViaWhatsApp() {
      const phoneNumber = '+917899050992'; // Replace with your WhatsApp number
      const message = this.generateWhatsAppMessage();

      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;

      // Open the WhatsApp chat link in a new tab
      window.open(whatsappLink, '_blank');
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },



    generateWhatsAppMessage() {
      let message = 'Order Details: \n';
      this.cartItems.forEach((item) => {
        message += `${item.title} ∙ ₹${item.price} ∙ ${item.isKilogram ? `${item.selectedQuantity} kg` : `${item.selectedQuantity}`}  ∙ ₹${item.selectedQuantity * item.price} \n`;
      });
      message += `\n Grand Total: ₹ ${this.calculateTotalPrice()} \n \n Add delivery address : `;
      return message;
    },

    // generateWhatsAppMessage() {
    //   let message = 'Order Details: \n';
    //   this.cartItems.forEach((item) => {
    //     message += `${item.title} ∙ ₹${item.price} ∙ ${item.selectedQuantity}kg ∙ ₹${item.selectedQuantity * item.price} \n`;
    //   });
    //   message += `\n Grand Total: ₹ ${this.calculateTotalPrice()} \n \n Add delivery address : `;
    //   return message;
    // },

    showKilogramProducts() {
      this.showKilogram = true;
    },
    showUnitProducts() {
      this.showKilogram = false;
    },
    changeTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style>
.tab button {
  border: none;
  background-color: #1e69fd;
  /* Add other styles for non-active tabs */
}

.tab button.active {
  background-color: #ff0b48;
  color: #000;
  /* Add other styles for active tabs */
}

.tab {
  line-height: 2.7;
  /* Adjust this value as needed to center the text */
}


/* .tab {
  background-color: white;
  color: green;
}


.tab.tab-active {
  background-color: green;
  color: white;
} */
/* Add your styling for ProductItem and other elements here */</style>
