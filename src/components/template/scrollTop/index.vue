<script setup>
import { handleScrollTop } from "@/libs/js/fn";
</script>
<template>
  <button
    @click="handleScrollTop('smooth')"
    class="fixed bottom-16 right-2 flex aspect-[1/1] w-16 items-center justify-center rounded-full border-8 border-[--color-17] bg-white text-[--color-17] opacity-50 shadow-lg hover:opacity-100 sm:bottom-20 sm:right-10"
  >
    <div class="relative">
      <div class="absolute left-1.5 h-1 w-3 -rotate-45 bg-[--color-17]"></div>
      <div class="absolute right-1.5 h-1 w-3 rotate-45 bg-[--color-17]"></div>
      <div class="mt-2">TOP</div>
    </div>
  </button>
</template>
