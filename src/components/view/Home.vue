<script setup>
import { ref, provide } from "vue";
import Banner from "@/components/template/banner/index.vue";
import UserLists from "@/components/template/userList/index.vue";
import FilterBox from "@/components/template/filterBox/index.vue";
import bannerImg from "@image/banner/exampleBanner.jpg";
const showStateResult = ref(false); // 針對選擇 state 時在不變換 data 狀態下顯示
const showStateMember = ref([]);
provide("showStateResult", showStateResult);
provide("showStateMember", showStateMember);
</script>

<template>
  <div>
    <Banner
      class="h-[calc(100dvh-75px)] bg-cover bg-center md:h-[507px]"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    />
    <div class="py-2.5">
      <div class="container mx-auto">
        <FilterBox />
        <UserLists />
      </div>
    </div>
  </div>
</template>
