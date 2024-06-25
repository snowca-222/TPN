<script setup>
import { ref } from "vue";
import Banner from "@/components/template/banner/index.vue";
import UserInfoBox from "@/components/template/userInfo/index.vue";

// defineProps({
//   msg: String,
// });
</script>

<template>
  <div>
    <Banner class="h-[600px] border-b-4 border-[--subColor]" />
    <div class="bg-[--mainColor] py-7">
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-1/4 px-2.5">
            <div class="mb-2.5 rounded-md bg-[--thrColor]">
              <div class="text-center">Select country</div>
              <div class="flex justify-center">
                <button>USA</button>
                <button>Taiwan</button>
              </div>
            </div>
            <div class="rounded-md bg-[--thrColor]">項目</div>
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
