<template>
  <div class="container mx-auto" style="background-color: rgb(244, 246, 251);">
    <div>

<div class="sticky top-14 z-50 bg-white">
<div class="tabs font-kannada">
  <a class="tab tab-bordered py-7 md:lg:py-8 content-center text-slate-900 text-lg font-semibold" :class="{ 'tab-active text-green-600': activeTab === 'Tab1' }" @click="changeTab('Tab1')"> <img src="/carrot.png" alt="ತರಕಾರಿ" class="h-7 w-7 mr-2 grayscale opacity-90" :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab1' }" @click="changeTab('Tab1')"> ತರಕಾರಿ</a>
  <a class="tab tab-bordered py-7 md:lg:py-8 content-center text-slate-900 text-lg font-semibold" :class="{ 'tab-active text-green-600': activeTab === 'Tab2' }" @click="changeTab('Tab2')"> <img src="/organic.png" alt="ಸೊಪ್ಪು" class="h-8 w-8 mr-2 grayscale opacity-90" :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab2' }" @click="changeTab('Tab1')"> ಸೊಪ್ಪು</a>
  <a class="tab tab-bordered py-7 md:lg:py-8 content-center text-slate-900 text-lg font-semibold" :class="{ 'tab-active text-green-600': activeTab === 'Tab3' }" @click="changeTab('Tab3')"> <img src="/shopping-cart.png" alt="Cart" class="h-8 w-8 mr-2 grayscale opacity-90" :class="{ 'grayscale-0 opacity-100': activeTab === 'Tab3' }" @click="changeTab('Tab1')"> Cart <span v-if="cartItems.length"
              class="absolute bg-green-600 text-gray-100 px-2 py-1 text-xs font-bold align-middle rounded-full top-1 -right-3">{{
                cartItems.length }}</span></a>
</div>
</div>


<div v-if="activeTab === 'Tab1'">
      <!-- Content for Tab 1 -->
      <div class="grid grid-cols-2 gap-3 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
          <ProductItem v-for="product in kilogramProducts" :key="product.id" :product="product" :cartItems="cartItems"
            @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
        </div>
    </div>
    <div v-if="activeTab === 'Tab2'">
      <!-- Content for Tab 2 -->
      <div class="grid grid-cols-2 gap-3 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
          <ProductItem v-for="product in unitProducts" :key="product.id" :product="product" :cartItems="cartItems"
            @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
        </div>
    </div>
    <div v-if="activeTab === 'Tab3'">
      <!-- Content for Tab 3 -->
      <div class=" bg-white">
          <div v-if="cartItems.length">
            <div class="relative p-3 flex-auto">
              <div class="mb-3">Minimum order amount is : <span class="font-bold">₹ {{ minCartValue }}</span></div>
              <div class="bg-white rounded-lg">
                <table class="w-full text-black text-md font-normal">
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
                      <td>{{ item.title }} · ₹{{ item.price }}</td>
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
                <button class="whitespace-nowrap btn mr-4 text-white bg-blue-600 border-0 p-2 rounded-md font-semibold"
                  type="button" v-on:click="activeTab = 'Tab1'">
                  <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 26.676 26.676" xml:space="preserve">
                    <g>
                      <path
                        d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z" />
                    </g>
                  </svg>
                  Shop
                </button>
                <button @click="orderViaWhatsApp" class="flex bg-emerald-600 mr-4 p-2 rounded-md"
                  :class="{ 'opacity-50 cursor-not-allowed': parseFloat(calculateTotalPrice()) < 250, }"
                  :disabled="parseFloat(calculateTotalPrice()) < minCartValue">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-2" fill="currentColor" style="color: #ffffff"
                    viewBox="0 0 24 24">
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <div class="">
                    <p class="text-white whitespace-nowrap font-semibold">Order on WhatsApp</p>
                  </div>

                </button>
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
                  <button class="whitespace-nowrap btn text-white bg-blue-600 border-0 p-2 rounded-md font-semibold"
                    type="button" v-on:click="activeTab = 'Tab1'">
                    <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 26.676 26.676" xml:space="preserve">
                      <g>
                        <path
                          d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z" />
                      </g>
                    </svg>
                    Back to shop
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>


      <!-- <div class="flex px-3 mb-2 pt-2 z-50 bg-emerald-500 top-14 sticky">
        <button class=" bg-white mr-2 mb-2 border-0 btn btn-md md:lg:mr-3 md:btn-md lg:btn-md text-black font-kannada"
          @click="activeTab = 'Tab1'"><img src="/veggy.png" alt="ತರಕಾರಿ" class="h-8 w-h8 md:w-10 md:h-10"><span
            class="text-base md:lg:text-2xl mt-1 md:lg:mt-2 md:lg:mr-3">ತರಕಾರಿ</span></button>
        <button class="bg-white mr-2 border-0 btn btn-md md:btn-md lg:btn-md text-black md:lg:mr-3 font-kannada"
          @click="activeTab = 'Tab2'"><img src="/soppu.png" alt="ಸೊಪ್ಪು" class="h-7 w-h7 md:w-10 md:h-10"> <span
            class="text-base md:lg:text-xl mt-1 md:lg:mt-2">ಸೊಪ್ಪು</span> </button>
        <button class="bg-white mr-2 border-0 btn btn-md md:btn-md lg:btn-md font-bold text-black"
          @click="activeTab = 'Tab3'">
          <img src="/cart.png" alt="cart" class="h-7 w-h7 md:w-10 md:h-10"><span class="text-md md:lg:text-2xl">Cart <span v-if="cartItems.length"
              class="absolute bg-green-600 text-gray-100 px-2 py-1 text-xs font-bold rounded-full top-1">{{
                cartItems.length }}</span></span>
        </button>
      </div> -->



      <!-- <div class="md:lg:px-6">
      <div v-if="activeTab === 'Tab1'">
        <div class="grid grid-cols-2 gap-3 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
          <ProductItem v-for="product in kilogramProducts" :key="product.id" :product="product" :cartItems="cartItems"
            @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
        </div>
      </div>
      <div v-bind:ref_for="activeTab === 'Tab2'">

        <div class="grid grid-cols-2 gap-3 p-3 md:gap-4 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
          <ProductItem v-for="product in unitProducts" :key="product.id" :product="product" :cartItems="cartItems"
            @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
        </div>

      </div>
      <div v-if="activeTab === 'Tab3'">
        <div class=" bg-white">
          <div v-if="cartItems.length">
            <div class="relative p-3 flex-auto">
              <div class="mb-3">Minimum order amount is : <span class="font-bold">₹ {{ minCartValue }}</span></div>
              <div class="bg-white rounded-lg">
                <table class="w-full text-black text-md font-normal">
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
                      <td>{{ item.title }} · ₹{{ item.price }}</td>
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
                <button class="whitespace-nowrap btn mr-4 text-white bg-blue-600 border-0 p-2 rounded-md font-semibold"
                  type="button" v-on:click="activeTab = 'Tab1'">
                  <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 26.676 26.676" xml:space="preserve">
                    <g>
                      <path
                        d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z" />
                    </g>
                  </svg>
                  Back to shop
                </button>
                <button @click="orderViaWhatsApp" class="flex bg-emerald-600 mr-4 p-2 rounded-md"
                  :class="{ 'opacity-50 cursor-not-allowed': parseFloat(calculateTotalPrice()) < 250, }"
                  :disabled="parseFloat(calculateTotalPrice()) < minCartValue">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-2" fill="currentColor" style="color: #ffffff"
                    viewBox="0 0 24 24">
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <div class="">
                    <p class="text-white font-semibold">Order on WhatsApp</p>
                  </div>

                </button>
              </div>
              <div class="divider"></div>

              <div class="flex items-center my-10 justify-center bg-white">
                <p class="text-center text-xl">If you are on pc/laptop, login to whatsapp web & click on <span
                    class="font-bold">Continue to Chat</span></p>
              </div>
              <div class="flex items-center justify-center"><img src="/pc.png" class="drop-shadow-md" alt="pc-whatsapp">
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
                  <button class="whitespace-nowrap btn text-white bg-blue-600 border-0 p-2 rounded-md font-semibold"
                    type="button" v-on:click="activeTab = 'Tab1'">
                    <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 26.676 26.676" xml:space="preserve">
                      <g>
                        <path
                          d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z" />
                      </g>
                    </svg>
                    Back to shop
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div> -->

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
  line-height: 2.7; /* Adjust this value as needed to center the text */
}

.tab.tab-active:not(.tab-disabled):not([disabled]) {

  /* border-color:#059669; */
  border-bottom-width: 3px ;
}
/* .tab {
  background-color: white;
  color: green;
}


.tab.tab-active {
  background-color: green;
  color: white;
} */
/* Add your styling for ProductItem and other elements here */
</style>
