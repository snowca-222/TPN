<script setup>
import { ref } from "vue";
import Banner from "@/components/template/banner/index.vue";
import UserInfoBox from "@/components/template/userInfo/index.vue";
import FilterBox from "@/components/template/filterBox/index.vue";
</script>

<template>
  <div>
    <Banner class="h-[600px] border-b-4 border-[--subColor]" />
    <div class="bg-[--mainColor] py-7">
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-1/4 px-2.5">
            <FilterBox />
          </div>
          <div class="w-3/4 px-2.5">
            <div class="flex flex-wrap rounded-md bg-[--thrColor]">
              <UserInfoBox v-for="i in 5" :key="i" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
