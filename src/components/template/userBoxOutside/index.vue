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
        class="m-auto aspect-[1/1] w-[150px]"
        src="@image/icons/userIcon.png"
        alt="noPhotoUser"
      />
      <div class="text-white">
        <div
          :class="[
            'mb-3 mt-5 h-10 text-center font-bold',
            { 'text-base': memberData.name.length > 30 },
            { 'text-xl': memberData.name.length <= 30 },
          ]"
        >
          {{ memberData.name }}
        </div>
        <ul class="m-auto mb-5 w-fit text-sm [&>li]:my-3">
          <li>{{ memberData.license }}</li>
          <li>{{ memberData.place }}</li>
          <li>{{ memberData.email }}</li>
        </ul>
      </div>
      <div class="flex [&>a]:w-full [&>a]:px-2.5">
        <template v-if="memberData.website">
          <a :href="memberData.website" target="_blank">
            <button
              class="w-full rounded-md bg-[--color-6] py-2.5 text-sm text-[--color-7] hover:bg-[--color-3] hover:text-[--color-17]"
            >
              Website
            </button>
          </a>
        </template>
        <template v-else>
          <div class="w-full px-2.5">
            <button
              class="w-full cursor-default rounded-md bg-[--color-22] py-2.5 text-sm text-[--color-21]"
            >
              Website
            </button>
          </div>
        </template>
        <router-link :to="{ name: 'User' }" @click="handleScrollTop('instant')">
          <button
            class="w-full rounded-md bg-[--color-9] py-2.5 text-sm text-[--color-10] hover:bg-[--color-4] hover:text-[--color-5]"
          >
            View Profile
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
