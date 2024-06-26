<script setup>
defineProps({
  dropDown: Boolean,
  isDropDown: Boolean,
});
</script>
<template>
  <button
    :class="[
      'flex items-center px-2 py-1 shadow-md',
      { 'rounded-full bg-[--color-7]': isDropDown === false },
      { 'rounded-t-2xl bg-[--color-17]': isDropDown === true },
    ]"
  >
    <div
      class="flex aspect-[1/1] w-8 items-center justify-center rounded-full bg-white"
    >
      <slot name="btnIcon"></slot>
    </div>
    <div class="mx-2 text-white">
      <slot name="btnName"></slot>
    </div>
    <div v-if="dropDown" class="mr-2 aspect-[1/1] h-4 w-4 overflow-hidden">
      <div
        :class="[
          'transition-transform',
          { '-translate-y-1.5': isDropDown === false },
          { 'translate-y-2': isDropDown === true },
        ]"
      >
        <div
          class="mx-auto aspect-[1/1] w-2 rotate-45 border-l-2 border-t-2 border-white"
        ></div>
        <div
          class="mx-auto aspect-[1/1] w-2 rotate-45 border-b-2 border-r-2 border-white"
        ></div>
      </div>
    </div>
  </button>
</template>
