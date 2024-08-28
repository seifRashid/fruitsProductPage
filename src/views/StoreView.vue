<script setup>
import ProductImage from '../components/ProductImage.vue'
import ProductDetails from '../components/ProductDetails.vue'
import { useFruitStore } from '../stores/fruitStore.js'

// let fruit = useFruitStore()
// fruit=fruit.getFruitData()
// import { useFruitStore } from '@/stores/fruitStore'; // Adjust the path as necessary
// import { onMounted } from 'vue';

const fruitStore = useFruitStore();

// onMounted(() => {
//   this.fruitStore =fruitStore.getFruitData();
// });
</script>

<template>
  <div class="flex p-2 flex-wrap">
    <div class="w-full sm:w-1/2 px-2">
      <ProductImage :image_url="fruitStore.fruits[fruitStore.index].image_url" :name="fruitStore.fruits[fruitStore.index].name" />
    </div>
    <div class="w-full sm:w-1/2 px-2">
      <ProductDetails
        :fruit-name="fruitStore.fruits[fruitStore.index].name"
        :description="fruitStore.fruits[fruitStore.index].description"
        :season="fruitStore.fruits[fruitStore.index].season"
        :origin="fruitStore.fruits[fruitStore.index].origin"
      />
    </div>
  </div>
  <div class="flex p-2 flex-wrap">
    <div class="w-full sm:w-1/2 px-2">Col One</div>
    <div class="w-full sm:w-1/2 px-2">Col Two</div>
  </div>
</template>

<style></style>
