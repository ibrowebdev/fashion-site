<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style>
/* Global styles added in main.css */
</style>
