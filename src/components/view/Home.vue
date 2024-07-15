<script setup>
import Banner from "@/components/template/banner/index.vue";
import UserLists from "@/components/template/userList/index.vue";
import FilterBox from "@/components/template/filterBox/index.vue";
import bannerImg from "@image/banner/exampleBanner.jpg";
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
