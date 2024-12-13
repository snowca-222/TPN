<script setup>
import { ref, onMounted, provide, computed } from "vue";
import Header from "@/components/template/header/index.vue";
import Footer from "@/components/template/footer/index.vue";
import ScrollTop from "@/components/template/scrollTop/index.vue";
import { checkDevice } from "@/libs/js/fn.js";
const device = ref("");
const deviceWidth = ref(window.innerWidth);

// 從 api 取得的會員資料
const memberDatas = ref();

// 透過篩選過後得到的資料
const memberSearchDatas = ref({
  USA: [],
  TW: [],
});

// 國家選擇
const countrySelect = ref("USA");

// 地區選擇
const isStates = ref("All");

// 檢視裝置寬度
const handleResize = () => {
  window.onresize = () => {
    deviceWidth.value = window.innerWidth;
  };
};
// loading
const loading = ref(true);
const hidden = ref(false);
const loadingHidden = computed(() => {
  if (!loading.value) {
    setTimeout(() => {
      hidden.value = true;
    }, 500);
    return hidden.value;
  }
  return false;
});
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
provide("isStates", isStates);
provide("device", device);
provide("deviceWidth", deviceWidth);
provide("loading", loading);
const handleShow = ref(false);
</script>
<template>
  <div
    id="main"
    class="flex h-1 min-h-dvh flex-col overflow-auto"
    @scroll="handleScroll($event)"
  >
    <div
      :class="[
        'fixed left-0 top-0 z-20 h-dvh w-dvw bg-white/100',
        {
          'animate__animated animate__faster animate__fadeOut': !loading,
        },
        { hidden: loadingHidden },
      ]"
    ></div>
    <Header />
    <router-view class="flex-1" />
    <Footer />
    <ScrollTop v-show="handleShow" />
  </div>
</template>
