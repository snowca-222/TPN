<script setup>
const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<template>
  <button
    @click="handleScrollTop"
    class="fixed bottom-20 right-10 flex aspect-[1/1] w-16 items-center justify-center rounded-full border-8 border-[--color-17] bg-white text-[--color-17] opacity-50 shadow-lg hover:opacity-100"
  >
    <div class="relative">
      <div class="absolute left-1.5 h-1 w-3 -rotate-45 bg-[--color-17]"></div>
      <div class="absolute right-1.5 h-1 w-3 rotate-45 bg-[--color-17]"></div>
      <div class="mt-2">TOP</div>
    </div>
  </button>
</template>
