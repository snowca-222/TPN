<script setup>
import { ref } from "vue";
import Banner from "@/components/template/banner/index.vue";
import UserInfoBox from "@/components/template/userInfo/index.vue";
import FilterBox from "@/components/template/filterBox/index.vue";
</script>

<template>
  <div>
    <Banner class="h-[507px]" />
    <div class="py-2.5">
      <div class="container mx-auto">
        <FilterBox />
        <div class="flex flex-wrap rounded-md bg-[--thrColor]">
          <UserInfoBox v-for="i in 5" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>
