<script setup>
defineProps({
  reviwerName:String,
  reviewComment:String,
  rating:Number,
  date:Date
})

</script>
<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-2">
    <!-- Comment Header -->
    <div class="flex items-center">
      <img
        class="w-12 h-12 rounded-full object-cover"
        src="https://via.placeholder.com/100"
        alt="User Avatar"
      />
      <div class="ml-4">
        <h3 class="text-lg font-semibold text-gray-800">{{ reviwerName }}</h3>
        <p class="text-sm text-gray-500">{{ date }}</p>
      </div>
    </div>

    <!-- Star Rating -->
    <div class="mt-4 flex items-center">
      <div class="text-yellow-500">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <!-- Change to fas fa-star for filled star -->
      </div>
      <p class="ml-2 text-gray-600">{{ rating }}</p>
    </div>

    <!-- Comment Text -->
    <p class="mt-4 text-gray-700">
      {{ reviewComment }}
    </p>

    <!-- Reply Button -->
    <div class="mt-6">
      <button
        class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Reply
      </button>
    </div>
  </div>
</template>
