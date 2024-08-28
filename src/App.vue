<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <header>
      <div class="flex gap-8 p-4">
        <img alt="Vue logo" class="" src="@/assets/logo.svg" width="36" height="36" />
        <nav class="flex gap-8 ">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/store">Store</RouterLink>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding-top:20px;  
} */
</style>
