<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'Test'}">Test</router-link>
    <router-view />
    <!-- <HelloWorld msg="Vite + Vue" /> -->
  </div>
</template>

