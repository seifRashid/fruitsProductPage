<script setup></script>
<template>
 <div class="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
  <h2 class="text-3xl font-semibold mb-6 text-gray-800">Checkout</h2>

  <!-- Contact Information -->
  <div class="mb-6">
    <h3 class="text-xl font-medium text-gray-700 mb-4">Contact Information</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="firstName" class="block text-gray-700">First Name</label>
        <input type="text" id="firstName" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John">
      </div>
      <div>
        <label for="lastName" class="block text-gray-700">Last Name</label>
        <input type="text" id="lastName" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe">
      </div>
      <div class="col-span-1 sm:col-span-2">
        <label for="email" class="block text-gray-700">Email Address</label>
        <input type="email" id="email" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="johndoe@example.com">
      </div>
      <div class="col-span-1 sm:col-span-2">
        <label for="phone" class="block text-gray-700">Phone Number</label>
        <input type="tel" id="phone" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+1 234 567 890">
      </div>
    </div>
  </div>

  <!-- Shipping Information -->
  <div class="mb-6">
    <h3 class="text-xl font-medium text-gray-700 mb-4">Shipping Information</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="address" class="block text-gray-700">Address</label>
        <input type="text" id="address" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123 Main St">
      </div>
      <div>
        <label for="city" class="block text-gray-700">City</label>
        <input type="text" id="city" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="New York">
      </div>
      <div>
        <label for="state" class="block text-gray-700">State/Province</label>
        <input type="text" id="state" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="NY">
      </div>
      <div>
        <label for="zip" class="block text-gray-700">ZIP/Postal Code</label>
        <input type="text" id="zip" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="10001">
      </div>
      <div class="col-span-1 sm:col-span-2">
        <label for="country" class="block text-gray-700">Mtaa</label>
        <select id="country" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Amani</option>
          <option>Kwashee</option>
          <option>Kwa Mwanzia</option>
          <option>Ganahola</option>
          <option>Staff</option>
          <option>Sameta</option>
          <option>Kwa Ng'ombe</option>
          <option>Runyu</option>
          <!-- Add more countries as needed -->
        </select>
      </div>
    </div>
  </div>

  <!-- Payment Information -->
  <div class="mb-6">
    <h3 class="text-xl font-medium text-gray-700 mb-4">Payment Method</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="col-span-1 sm:col-span-2">
        <label for="cardNumber" class="block text-gray-700">Card Number</label>
        <input type="text" id="cardNumber" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1234 5678 9012 3456">
      </div>
      <div>
        <label for="expiry" class="block text-gray-700">Expiry Date</label>
        <input type="text" id="expiry" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM/YY">
      </div>
      <div>
        <label for="cvc" class="block text-gray-700">CVC</label>
        <input type="text" id="cvc" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123">
      </div>
    </div>
  </div>

  <!-- Order Summary -->
  <div class="mb-6">
    <h3 class="text-xl font-medium text-gray-700 mb-4">Order Summary</h3>
    <div class="flex justify-between mb-2">
      <p class="text-gray-700">Product 1</p>
      <p class="text-gray-700">$29.99</p>
    </div>
    <div class="flex justify-between mb-2">
      <p class="text-gray-700">Product 2</p>
      <p class="text-gray-700">$39.99</p>
    </div>
    <div class="flex justify-between mb-2">
      <p class="text-gray-700">Product 3</p>
      <p class="text-gray-700">$49.99</p>
    </div>
    <div class="flex justify-between font-semibold text-gray-800 mb-4">
      <p>Total</p>
      <p>$119.97</p>
    </div>
  </div>

  <!-- Submit Button -->
  <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
    Place Order
  </button>
</div>

</template>
<style></style>