<script setup>
import { ref } from "vue";
import Header from "@/components/template/header/index.vue";
import Footer from "@/components/template/footer/index.vue";
import ScrollTop from "@/components/template/scrollTop/index.vue";
const handleShow = ref(true);
</script>
<template>
  <div class="flex min-h-dvh flex-col">
    <Header />
    <router-view class="flex-1" />
    <Footer />
    <ScrollTop v-show="handleShow" />
  </div>
</template>
