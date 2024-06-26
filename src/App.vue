<script setup>
import Header from "@/components/template/header/index.vue";
import Footer from "@/components/template/footer/index.vue";
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <Header />
    <router-view class="flex-1" />
    <Footer />
  </div>
</template>
