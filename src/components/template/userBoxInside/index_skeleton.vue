<script setup>
import { ref } from "vue";

const listBox_left = ref([
  {
    type: "License State",
    title: "License State",
  },
  {
    type: "Licensure Info",
    title: "Licensure Info",
  },
  {
    type: "Language",
    title: "Language",
  },
]);
const listBox_right = ref([
  {
    type: "Areas of Specialty",
    title: "Areas of Specialty",
  },
  {
    type: "Populations Served",
    title: "Populations Served",
  },
  {
    type: "Insurance",
    title: "Insurance",
  },
  {
    type: "Interstate compact",
    title: "Interstate compact",
  },
  {
    type: "Sliding Scale",
    title: "Sliding Scale",
  },
]);
</script>
<template>
  <div>
    <div class="mb-10 flex flex-wrap justify-center">
      <div class="flex w-full items-center justify-center md:w-4/12">
        <div
          class="skeleton_loading flex aspect-[1/1] w-60 items-center justify-center rounded-xl shadow-md sm:w-[380px]"
        >
          <img
            src="@image/icons/userIcon.png"
            alt="noPhotoUser"
            class="w-48 overflow-hidden rounded-full border-8 border-[--color-2] shadow-lg sm:w-[300px]"
          />
        </div>
      </div>
      <div
        class="flex w-full items-center justify-center p-2.5 sm:p-10 md:w-8/12 md:justify-start"
      >
        <div class="w-full">
          <h3 class="w-full">
            <div class="skeleton_loading h-6 sm:h-8 md:h-9 xl:h-12"></div>
            <div class="skeleton_loading mt-2 h-3 w-1/3 sm:h-5"></div>
          </h3>
          <h4 class="skeleton_loading mt-2 h-7 w-1/2"></h4>
          <ul class="flex sm:flex-col">
            <li
              v-for="i in 2"
              :key="i"
              :class="['skeleton_loading mt-4 h-5 w-1/2', 'sm:w-2/3']"
            ></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="w-full p-2.5 xl:w-4/12">
        <div class="rounded-md border border-[--color-22] bg-white p-2.5">
          <div
            v-for="i in 3"
            :key="i"
            class="border-b border-b-[--color-22] p-3 last:border-b-0"
          >
            <div class="skeleton_loading h-8 w-1/2"></div>

            <ul class="">
              <li
                v-for="i in 3"
                :key="i"
                class="skeleton_loading mt-4 h-5"
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full p-2.5 xl:w-8/12">
        <div
          v-for="i in 5"
          :key="i"
          class="skeleton_loading mb-6 rounded-md bg-[--color-23] p-6"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
