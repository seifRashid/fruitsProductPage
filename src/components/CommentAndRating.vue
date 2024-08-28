<script setup>
</script>
<template>
    <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  <!-- Comment Header -->
  <div class="flex items-center">
    <img class="w-12 h-12 rounded-full object-cover" src="https://via.placeholder.com/100" alt="User Avatar">
    <div class="ml-4">
      <h3 class="text-lg font-semibold text-gray-800">John Doe</h3>
      <p class="text-sm text-gray-500">August 28, 2024</p>
    </div>
  </div>

  <!-- Star Rating -->
  <div class="mt-4 flex items-center">
    <div class="text-yellow-500">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i> <!-- Change to fas fa-star for filled star -->
    </div>
    <p class="ml-2 text-gray-600">(4/5)</p>
  </div>

  <!-- Comment Text -->
  <p class="mt-4 text-gray-700">
    This product is amazing! I’ve been using it for a week, and I can already see a difference. The quality is top-notch and the customer service was very responsive.
  </p>

  <!-- Reply Button -->
  <div class="mt-6">
    <button class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
      Reply
    </button>
  </div>
</div>

</template>