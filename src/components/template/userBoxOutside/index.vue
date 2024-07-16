<script setup>
import { handleScrollTop } from "@/libs/js/fn";
defineProps({
  memberData: Object,
});
</script>
<template>
  <div class="w-full p-2.5 md:w-1/2 xl:w-1/3">
    <div
      class="rounded-md bg-[--color-1] p-2.5 transition-colors hover:bg-[--color-2]"
    >
      <img
        v-if="memberData.photoImg"
        :src="memberData.photoImg"
        :alt="memberData.memberName_en"
        class="m-auto aspect-[1/1] w-[150px] rounded-full"
      />
      <img
        v-else
        class="m-auto aspect-[1/1] w-[150px]"
        src="@image/icons/userIcon.png"
        alt="noPhotoUser"
      />
      <div class="text-white">
        <div
          :class="[
            'mb-3 mt-5 h-10 text-center font-bold',
            { 'text-base': memberData.memberName_en.length > 30 },
            { 'text-xl': memberData.memberName_en.length <= 30 },
          ]"
        >
          {{ memberData.memberName_en }}
        </div>
        <ul class="m-auto mb-5 w-fit text-sm [&>li]:my-3">
          <li>{{ memberData.activeLists }}</li>
          <li>{{ memberData.activeLicensed }}</li>
          <li>{{ memberData.mail }}</li>
        </ul>
      </div>
      <div class="flex [&>a]:w-full [&>a]:px-2.5">
        <template v-if="memberData.website">
          <a :href="memberData.website" target="_blank">
            <button
              class="btn_light_purple w-full rounded-md bg-[--color-6] py-2.5 text-[--color-7] hover:text-[--color-17]"
            >
              Website
            </button>
          </a>
        </template>
        <template v-else>
          <div class="w-full px-2.5">
            <button
              class="btn_disabled w-full rounded-md py-2.5 text-[--color-21]"
              disabled
            >
              Website
            </button>
          </div>
        </template>
        <router-link :to="{ name: 'User' }" @click="handleScrollTop('instant')">
          <button
            class="btn_orange w-full rounded-md bg-[--color-9] py-2.5 text-[--color-10] hover:bg-[--color-4] hover:text-[--color-5]"
          >
            View Profile
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
