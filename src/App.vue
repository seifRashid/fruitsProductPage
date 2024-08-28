<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <header>
      <NavBar/>
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
