<script setup>
// This script will handle the checked state and apply the correct styles
const stars = document.querySelectorAll('input[name="rating"]')
stars.forEach((star) => {
  star.addEventListener('change', () => {
    stars.forEach((input, index) => {
      const starIcon = input.nextElementSibling.querySelector('i')
      if (index < star.value) {
        starIcon.classList.remove('text-gray-300')
        starIcon.classList.add('text-yellow-500')
      } else {
        starIcon.classList.remove('text-yellow-500')
        starIcon.classList.add('text-gray-300')
      }
    })
  })
})
</script>
<template>
  <div class="max-w-lg mx-auto ml-1 p-3 bg-white rounded-lg shadow-lg">
    <!-- Comment Form Header -->
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Leave a Comment</h2>

    <!-- Name Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
      <input
        type="text"
        id="name"
        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
      />
    </div>

    <!-- Star Rating -->
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2">Rating</label>
      <div class="flex items-center space-x-2">
        <!-- Star 1 -->
        <input type="radio" id="star1" name="rating" value="1" class="hidden" />
        <label for="star1">
          <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-500"></i>
        </label>

        <!-- Star 2 -->
        <input type="radio" id="star2" name="rating" value="2" class="hidden" />
        <label for="star2">
          <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-500"></i>
        </label>

        <!-- Star 3 -->
        <input type="radio" id="star3" name="rating" value="3" class="hidden" />
        <label for="star3">
          <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-500"></i>
        </label>

        <!-- Star 4 -->
        <input type="radio" id="star4" name="rating" value="4" class="hidden" />
        <label for="star4">
          <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-500"></i>
        </label>

        <!-- Star 5 -->
        <input type="radio" id="star5" name="rating" value="5" class="hidden" />
        <label for="star5">
          <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-500"></i>
        </label>
      </div>
    </div>

    <!-- Comment Textarea -->
    <div class="mb-4">
      <label for="comment" class="block text-gray-700 font-medium mb-2">Your Comment</label>
      <textarea
        id="comment"
        rows="5"
        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your comment here"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      Submit Comment
    </button>
  </div>
</template>
<style></style>
