<template>
  <div class="container mx-auto" style="background-color: #e8f0f3">
    <div>
      <div class="sticky top-16 z-50 bg-white">
        <div class="tabs font-kannada items-center">
          <a
            class="tab py-7 md:lg:py-8 content-center text-slate-900 text-lg font-bold border-b-4 border-gray-300"
            :class="{ 'tab-active': activeTab === 'Tab1' }"
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
            @click="changeTab('Tab2')"
          >
            <img
              src="/organic.png"
              alt="ಸೊಪ್ಪು"
              class="h-8 w-8 mr-2 grayscale opacity-90"
              :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab2' }"
              @click="changeTab('Tab1')"
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
            <span class="text-md font-semibold font-poppins ml-2">
              {{ cartItems.length }}</span
            >
          </button>
        </div>
      </div>

      <div v-if="activeTab === 'Tab1'">
        <!-- Content for Tab 1 -->
        <div
          class="grid grid-cols-2 gap-2 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5"
        >
          <ProductItem
            v-for="product in kilogramProducts"
            :key="product.id"
            :product="product"
            :cartItems="cartItems"
            @add-to-cart="addToCart"
            @remove-from-cart="removeFromCart"
          />
        </div>
      </div>
      <div v-show="activeTab === 'Tab2'">
        <!-- Content for Tab 2 -->
        <div
          class="grid grid-cols-2 gap-2 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5"
        >
          <ProductItem
            v-for="product in unitProducts"
            :key="product.id"
            :product="product"
            :cartItems="cartItems"
            @add-to-cart="addToCart"
            @remove-from-cart="removeFromCart"
          />
        </div>
      </div>
      <div v-if="activeTab === 'Tab3'">
        <!-- Content for Tab 3 -->
        <div class="bg-white font-poppins">
          <div v-if="cartItems.length">
            <div class="relative p-3 flex-auto">
              <div class="mb-3 text-black">
                Minimum order amount is :
                <span class="font-bold">₹ {{ minCartValue }}</span>
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
                    <tr
                      v-for="(item, index) in sortedCartItems"
                      :key="item.id"
                      class="border-b border-gray-300 h-9"
                    >
                      <td>
                        <span class="font-kannada"> {{ item.title }}</span> ·
                        <span class="font-poppins">₹{{ item.price }}</span>
                      </td>
                      <td class="text-left">
                        {{
                          item.isKilogram
                            ? `${item.selectedQuantity} kg`
                            : `${item.selectedQuantity}`
                        }}
                      </td>
                      <td>₹{{ item.selectedQuantity * item.price }}</td>
                      <td class="text-right">
                        <button
                          @click="removeFromCart(item)"
                          class="px-2 py-1 bg-red-500 text-white text-sm rounded-md"
                        >
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
                        <td class="pr-4 text-lg font-semibold text-black">
                          Delivery Charge :
                        </td>
                        <td class="text-lg font-semibold text-black">0</td>
                      </tr>
                      <tr>
                        <td class="text-lg font-semibold text-black">Sub total :</td>
                        <td class="text-lg font-semibold text-black">
                          ₹ {{ calculateTotalPrice() }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="flex flex-col place-items-start">
                  <button
                    @click="orderViaWhatsApp"
                    class="text-white bg-green-700 font-bold py-2 px-4 rounded-full mb-4"
                    :class="{
                      'opacity-50 cursor-not-allowed':
                        parseFloat(calculateTotalPrice()) < 250,
                    }"
                    :disabled="parseFloat(calculateTotalPrice()) < minCartValue"
                  >
                    Order on whatsapp
                  </button>

                  <div
                    v-if="parseFloat(calculateTotalPrice()) < minCartValue"
                    class="alert alert-warning bg-yellow-50 border border-yellow-400 rounded text-yellow-800 text-sm p-2 flex justify-between mb-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>Minimum Order Amount is ₹ {{ minCartValue }}</span>
                  </div>

                  <button
                    type="button"
                    v-on:click="activeTab = 'Tab1'"
                    class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Keep shopping
                  </button>
                </div>
              </div>
              <div class="divider"></div>

              <div
                class="hidden sm:block md:block lg:block xl:block items-center my-10 justify-center bg-white"
              >
                <p class="text-center text-xl">
                  If you are on pc/laptop, login to whatsapp web & click on
                  <span class="font-bold">Continue to Chat</span>
                </p>
              </div>

              <div class="divider"></div>
              <div class="flex items-center justify-center">
                <img src="/bag.png" alt="" class="h-28" />
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
                  <img src="/empty-cart.webp" class="h-56" alt="" />
                </div>
                <div class="mt-4">
                  <button
                    type="button"
                    v-on:click="activeTab = 'Tab1'"
                    class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
                  >
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
import ProductItem from "~/components/ProductItem.vue";
import productsData from "/products.json";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      showKilogram: true,
      showModal: false,
      tab: ["Tab1"],
      activeTab: "Tab1",
      minCartValue: 250,
      products: productsData,
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
    sortedCartItems() {
      return this.cartItems.slice().sort((a, b) => a.id - b.id);
    },
  },
  methods: {
    addToCart(product) {
      // Check if the item is already in the cart
      const existingItem = this.cartItems.find((item) => item.id === product.id);
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
      const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
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
      const phoneNumber = "+917899050992"; // Replace with your WhatsApp number
      const message = this.generateWhatsAppMessage();

      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;

      // Open the WhatsApp chat link in a new tab
      window.open(whatsappLink, "_blank");
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },

    generateWhatsAppMessage() {
      let message = "Order Details: \n";
      this.cartItems.forEach((item) => {
        message += `${item.title} ∙ ₹${item.price} ∙ ${
          item.isKilogram ? `${item.selectedQuantity} kg` : `${item.selectedQuantity}`
        }  ∙ ₹${item.selectedQuantity * item.price} \n`;
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
.tab.tab-active:not(.tab-disabled):not([disabled]) {
  border-color: #448c3a;
}

/*
.tab.tab-active {
  background-color: green;
  color: white;
} */
/* Add your styling for ProductItem and other elements here */
</style>
