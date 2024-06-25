<script setup>
import Header from "@/components/template/header/index.vue";
import Footer from "@/components/template/footer/index.vue";
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <!-- <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'User' }">User</router-link> -->
    <Header />
    <router-view class="flex-1" />
    <Footer />
  </div>
</template>
