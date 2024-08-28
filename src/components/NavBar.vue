<script setup>
import { RouterLink } from 'vue-router'
import { useFruitStore } from '../stores/fruitStore.js'

const fruitStore = useFruitStore();

</script>
<template>
  <div class="flex justify-between align-center p-4 bg-slate-900">
    <img alt="Vue logo" class="" src="@/assets/logo.svg" width="36" height="36" />
    <div class="flex justify-between gap-8 mr-8 align-center">
      <nav class="flex gap-8 text-white">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/store">Store</RouterLink>
      </nav>
      <i class="fas fa-cart-plus text-green-500 text-2xl hover:text-green-700 cursor-pointer" @click="fruitStore.activeCart()"></i>
    </div>
  </div>
</template>
<style></style>
