<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
<div class="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
  <!-- Cart Header -->
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Shopping Cart</h2>

  <!-- Cart Items -->
  <div class="space-y-4">
    <!-- Cart Item 1 -->
    <div class="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
      <div class="flex items-center">
        <img src="https://via.placeholder.com/100" alt="Product Image" class="w-20 h-20 object-cover rounded-lg">
        <div class="ml-4">
          <h3 class="text-lg font-semibold text-gray-800">Product Name</h3>
          <!-- <p class="text-gray-600">Product Description</p> -->
          <div class="mt-2">
            <span class="text-sm text-gray-500">Quantity:</span>
            <input type="number" min="1" value="1" class="w-12 p-1 text-center border border-gray-300 rounded-md">
          </div>
        </div>
      </div>
      <div class="text-right">
        <p class="text-xl font-semibold text-gray-800 ml-2">$25.00</p>
        <button class="mt-2 text-red-600 hover:text-red-800">Remove</button>
      </div>
    </div>

    <!-- Repeat for More Cart Items -->
    <!-- Cart Item 2 -->
    <div class="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
      <div class="flex items-center">
        <img src="https://via.placeholder.com/100" alt="Product Image" class="w-20 h-20 object-cover rounded-lg">
        <div class="ml-4">
          <h3 class="text-lg font-semibold text-gray-800">Product Name</h3>
          <!-- <p class="text-gray-600">Product Description</p> -->
          <div class="mt-2">
            <span class="text-sm text-gray-500">Quantity:</span>
            <input type="number" min="1" value="2" class="w-12 p-1 text-center border border-gray-300 rounded-md">
          </div>
        </div>
      </div>
      <div class="text-right">
        <p class="text-xl font-semibold text-gray-800 ml-2">$50.00</p>
        <button class="mt-2 text-red-600 hover:text-red-800">Remove</button>
      </div>
    </div>
  </div>

  <!-- Cart Summary -->
  <div class="mt-6 border-t pt-4">
    <div class="flex justify-between text-gray-800">
      <span class="font-semibold">Subtotal:</span>
      <span class="font-semibold">$75.00</span>
    </div>
    <div class="flex justify-between text-gray-800 mt-2">
      <span class="font-semibold">Shipping:</span>
      <span class="font-semibold">$5.00</span>
    </div>
    <div class="flex justify-between text-lg font-bold text-gray-800 mt-4">
      <span>Total:</span>
      <span>$80.00</span>
    </div>
    <button class="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
        <RouterLink to="/checkout">Proceed to Checkout</RouterLink>
    </button>
  </div>
</div>


</template>
<style>
</style>