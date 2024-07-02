<script setup>
import { inject } from "vue";
const handleFilterBox = inject("handleFilterBox");
const handleSearch = () => {
  console.log("search");
};
const handleCleared = () => {
  console.log("reset");
};
</script>
<template>
  <div class="fixed left-0 top-0 z-[3] h-dvh w-full">
    <div class="absolute h-dvh w-full bg-black/80"></div>
    <div
      class="absolute left-0 right-0 top-1/2 m-auto w-11/12 -translate-y-1/2"
    >
      <div
        class="flex justify-between rounded-t-lg bg-[--color-14] p-5 text-white"
      >
        <div>
          <span class="text-2xl">{{ $t("filter.popup.title") }}</span>
          <button class="px-5 text-[--color-20] hover:brightness-110">
            {{ $t("button.clearFilter") }}
          </button>
        </div>
        <button
          @click="handleFilterBox"
          class="text-xl text-white/80 hover:text-white"
        >
          {{ $t("button.close") }}
        </button>
      </div>
      <div class="h-[calc(73dvh)] overflow-y-auto bg-white px-5">lists</div>
      <div class="flex justify-end rounded-b-lg bg-[--color-14] px-5 py-5">
        <button
          @click="handleSearch"
          class="rounded-md border border-[--color-21] bg-[--color-11] px-10 py-1 text-xl text-white hover:brightness-110"
        >
          {{ $t("button.search") }}
        </button>
      </div>
    </div>
  </div>
</template>
