<template>
  <div class="container mx-auto px-4">
    <img
      :src="`/images/${image_url}`"
      :alt="name"
      class="w-[500px] h-[500px] object-cover rounded-lg"
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
