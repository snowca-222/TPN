<script setup>
import { ref, onMounted, provide } from "vue";
import Header from "@/components/template/header/index.vue";
import Footer from "@/components/template/footer/index.vue";
import ScrollTop from "@/components/template/scrollTop/index.vue";
import { checkDevice } from "@/libs/js/fn.js";
const device = ref("");
const deviceWidth = ref(window.innerWidth);

// 檢視裝置寬度
const handleResize = () => {
  window.onresize = () => {
    deviceWidth.value = window.innerWidth;
  };
};
const handleScroll = (e) => {
  if (e.target.scrollTop > 0) {
    handleShow.value = true;
  } else {
    handleShow.value = false;
  }
};

onMounted(() => {
  checkDevice() ? (device.value = "Mobile") : (device.value = "PC");
  handleResize();
});
provide("device", device);
provide("deviceWidth", deviceWidth);
const handleShow = ref(false);
</script>
<template>
  <div
    id="main"
    class="flex h-1 min-h-dvh flex-col overflow-auto"
    @scroll="handleScroll($event)"
  >
    <Header />
    <router-view class="flex-1" />
    <Footer />
    <ScrollTop v-show="handleShow" />
  </div>
</template>
