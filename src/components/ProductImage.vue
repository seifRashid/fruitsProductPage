<template>
  <div class="container mx-auto px-4">
    <img
      :src="`/images/${image_url}`"
      :alt="name"
      class="w-[400px] h-auto object-cover rounded-lg"
    />
  </div>
</template>
<script setup>
defineProps({
    image_url: String,
    name: String
})
</script>
<style></style>
