<script setup>
import { ref, computed } from "vue";
import Button from "@/components/template/button/index.vue";
import searchIcon from "@image/icons/search.svg";
import flag_USA from "@image/flag/united-states.png";
import flag_TW from "@image/flag/taiwan.png";

const isSelect = ref("USA");
const isExpand = ref(false);
const countryLists = ref([
  {
    id: "USA",
    name: "country.USA",
    flag: flag_USA,
  },
  {
    id: "TW",
    name: "country.TW",
    flag: flag_TW,
  },
]);
const handleCountry = (setCountry) => {
  isSelect.value = setCountry;
};
const handleSearch = () => {
  console.log("search");
};
const handleCleared = () => {};
const handleExpand = () => {
  isExpand.value ? (isExpand.value = false) : (isExpand.value = true);
};
</script>
<template>
  <div>
    <div class="mb-2.5 rounded-md bg-[--thrColor] py-2.5">
      <div class="py-0 text-center text-lg font-bold text-[--color-7]">
        {{ $t("filter.title") }}
      </div>
      <div class="flex justify-center py-2.5">
        <button
          v-for="list in countryLists"
          @click="handleCountry(list.id)"
          :key="list.id"
          :class="[
            'mx-1 flex rounded-full px-3 py-2 transition-colors',
            { 'bg-[--color-2] text-white': isSelect === list.id },
            { 'bg-[--color-19] text-gray-500': isSelect !== list.id },
          ]"
        >
          <img class="w-6" :src="list.flag" :alt="list.id" />
          <span class="mx-2">{{ $t(list.name) }}</span>
        </button>
      </div>
    </div>
    <div class="rounded-md bg-[--thrColor] p-2.5">
      <div
        class="flex justify-between [&>button]:rounded-md [&>button]:px-3 [&>button]:text-white [&>button]:transition-colors"
      >
        <button
          @click="handleCleared"
          class="bg-[--color-15] hover:bg-[--color-16]"
        >
          {{ $t("button.clearFilter") }}
        </button>
        <button
          @click="handleExpand"
          class="flex items-center bg-[--color-1] hover:bg-[--color-2]"
        >
          <span>
            <template v-if="isExpand === false">
              {{ $t("button.expand") }}
            </template>
            <template v-else>
              {{ $t("button.collapse") }}
            </template>
          </span>
          <div>
            <img
              src="@image/icons/arrow_drop_up.svg"
              :class="[
                'transition-transform',
                { 'rotate-180': isExpand === true },
              ]"
              alt="arrow up"
            />
            <img
              src="@image/icons/arrow_drop_down.svg"
              :class="[
                '-mt-4 transition-transform',
                { 'rotate-180': isExpand === true },
              ]"
              alt="arrow down"
            />
          </div>
        </button>
      </div>

      <div class="py-4">
        <Button :dropDown="false" class="mx-auto" @click="handleSearch">
          <template #btnIcon>
            <img :src="searchIcon" alt="searchIcon" class="-mt-1.5 ml-0.5" />
          </template>
          <template #btnName>{{ $t("button.search") }}</template>
        </Button>
      </div>
    </div>
  </div>
</template>
