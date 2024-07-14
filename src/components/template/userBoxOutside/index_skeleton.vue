<script setup>
import { ref } from "vue";
</script>
<template>
  <div class="w-full p-2.5 md:w-1/2 xl:w-1/3">
    <div class="rounded-md bg-[--color-19] p-2.5 transition-colors">
      <div
        class="skeleton_loading m-auto aspect-[1/1] w-[150px] rounded-full"
      ></div>
      <div class="px-2.5">
        <div
          class="skeleton_loading mb-3 mt-5 h-10 rounded-md text-center font-bold"
        ></div>
        <ul class="m-auto mb-5 w-full text-sm [&>li]:my-3">
          <li
            v-for="i in 3"
            :key="i"
            class="skeleton_loading skeleton_loading h-5 w-full rounded-full"
          ></li>
        </ul>
      </div>
      <div class="flex">
        <div v-for="i in 2" :key="i" class="w-full px-2.5">
          <button
            class="skeleton_loading h-10 w-full rounded-md py-2.5 text-sm text-[--color-7]"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.skeleton_loading {
  background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    var(--loadingGray);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}
@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
</style>
