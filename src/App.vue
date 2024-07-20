<script setup>
import { ref, onMounted, provide } from "vue";
import Header from "@/components/template/header/index.vue";
import Footer from "@/components/template/footer/index.vue";
import ScrollTop from "@/components/template/scrollTop/index.vue";
import { checkDevice } from "@/libs/js/fn.js";
const device = ref("");
const deviceWidth = ref(window.innerWidth);
const memberDatas = ref(); // 從 api 取得的會員資料
const memberSearchDatas = ref(); // 透過篩選過後得到的資料
const countrySelect = ref("USA"); // 國家選擇

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
provide("memberDatas", memberDatas);
provide("memberSearchDatas", memberSearchDatas);

provide("countrySelect", countrySelect);
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
