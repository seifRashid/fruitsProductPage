<script setup>
import ProductImage from '../components/ProductImage.vue'
import ProductDetails from '../components/ProductDetails.vue'
import { useFruitStore } from '../stores/fruitStore.js'
import CommentAndRating from '@/components/CommentAndRating.vue'
import InsertCommentRating from '@/components/InsertCommentRating.vue'
import CartCard from '@/components/CartCard.vue'


const fruitStore = useFruitStore()

</script>

<template>
  <div class="flex p-2 flex-wrap mt-8">
    <div class="w-full sm:w-1/2 px-2">
      <ProductImage
        :image_url="fruitStore.fruits[fruitStore.index].image_url"
        :name="fruitStore.fruits[fruitStore.index].name"
      />
    </div>
    <div class="w-full sm:w-1/2 px-2">
      <ProductDetails
        :fruit-name="fruitStore.fruits[fruitStore.index].name"
        :description="fruitStore.fruits[fruitStore.index].description"
        :season="fruitStore.fruits[fruitStore.index].season"
        :origin="fruitStore.fruits[fruitStore.index].origin"
      />
    </div>
    <div class="absolute right-0 ml-2 -mt-12" v-show="fruitStore.cartActive">
      <CartCard/>
    </div>
  </div>
  <div class="flex pt-2 flex-wrap">
    <div class="w-full sm:w-1/2 px-2">
      <InsertCommentRating />
    </div>
    <div class="w-full sm:w-1/2 px-2">
      <CommentAndRating />
    </div>
  </div>
</template>

<style></style>
