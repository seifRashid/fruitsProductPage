<script setup>

import { useFruitStore } from '../stores/fruitStore.js'
const fruitStore = useFruitStore();

defineProps({
  fruitName: String,
  description: String,
  origin: String,
  season: String
})
</script>
<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-4">
    <h1 class="text-2xl font-semibold text-gray-800">{{ fruitName }}</h1>

    <div class="mt-6">
      <div class="mb-5">
        <p class="text-lg font-medium text-gray-700">Fruit Description</p>
        <p class="text-base text-gray-600">{{ description }}</p>
      </div>

      <div class="mb-5">
        <p class="text-lg font-medium text-gray-700">Fruit Origin</p>
        <p class="text-base text-gray-600">{{ origin }}</p>
      </div>

      <div class="mb-5">
        <p class="text-lg font-medium text-gray-700">Fruit Season</p>
        <p class="text-base text-gray-600">{{ season }}</p>
      </div>
    </div>

    <div class="flex gap-8">
      <div
        class="bg-blue-500 text-white flex gap-1 items-center rounded-lg hover:bg-blue-600 py-2 px-3 cursor-pointer">
        <i class="fas fa-chevron-left"></i>
        <button @click="fruitStore.previousIndex()" :disabled="false" :class="{cursorNotAllowed:'cursor-not-allowed'}" >Previous</button>
      </div>
      <div
        class="bg-blue-500 text-white flex gap-1 items-center rounded-lg hover:bg-blue-600 p-2 px-3 cursor-pointer">
        <button @click="fruitStore.nextIndex()" :disabled="false" :class="cursorNotAllowed">Next</button>
        <i class="fas fa-chevron-right"></i>
      </div>
      <div
        class="bg-green-500 text-white flex gap-1 items-center rounded-lg hover:bg-green-600 p-2 px-3 cursor-pointer">
        Add
        <i class="fas fa-cart-plus"></i>
        <button>Cart</button>
      </div>
    </div>
  </div>
</template>
<style></style>
