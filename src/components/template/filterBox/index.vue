<script setup>
import { ref, provide } from "vue";
import Button from "@/components/template/button/index.vue";
import FilterListsPanel from "@/components/template/filterBox/filterLists.vue";
// import searchIcon from "@image/icons/search.svg";
import flag_USA from "@image/flag/united-states.png";
import flag_TW from "@image/flag/taiwan.png";
import States_USA from "@/libs/js/states/USA.json";
import arrow_down from "@image/icons/arrow_drop_down.vue";
import arrow_up from "@image/icons/arrow_drop_up.vue";

const isSelect = ref("USA");
const isExpand = ref(false);
const isStates = ref("AL");
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
const handleState = (setState) => {
  isStates.value = setState;
};
const viewState = ref(false);
const viewCounts = ref(17);
const handleExpand = () => {
  if (viewState.value) {
    viewState.value = false;
    viewCounts.value = 17;
  } else {
    viewState.value = true;
    viewCounts.value = States_USA.length;
  }
};

const isFilterBox = ref(false);
const handleFilterBox = () => {
  if (isFilterBox.value) {
    isFilterBox.value = false;
    document.querySelector("body").style.overflow = "";
  } else {
    isFilterBox.value = true;
    document.querySelector("body").style.overflow = "hidden";
  }
};
provide("handleFilterBox", handleFilterBox);
</script>
<template>
  <div>
    <div class="mb-2.5 py-2.5">
      <div class="flex justify-center py-2.5">
        <div>
          <button
            v-for="list in countryLists"
            @click="handleCountry(list.id)"
            :key="list.id"
            :class="[
              'relative w-[400px] rounded-full border border-[--color-11] px-2.5 py-3.5 text-[28px] transition-colors',
              { 'z-[2] bg-[--color-12] text-white': isSelect === list.id },
              {
                'bg-white text-[--color-11] hover:bg-[--color-12] hover:text-white hover:brightness-125':
                  isSelect !== list.id,
              },
              {
                'left-8': list.id === 'USA',
              },
              {
                'right-8': list.id === 'TW',
              },
            ]"
          >
            <div class="flex items-center justify-center">
              <img class="w-6" :src="list.flag" :alt="list.id" />
              <span class="mx-2">{{ $t(list.name) }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="mb-5 py-2.5 text-2xl text-[--color-12]">
        {{ $t("filter.title.state") }}
        <div class="flex flex-wrap text-xl [&>div]:px-2 [&>div]:py-1.5">
          <div>
            <button
              @click="handleState('All')"
              :class="[
                'rounded-md border border-[--color-11] px-5 py-2',
                { 'bg-[--color-12] text-white': isStates === 'All' },
                { 'text-[--color-11]': !isStates },
              ]"
            >
              All (0)
            </button>
          </div>
          <div v-for="(state, idx) in States_USA" :key="state.city_code">
            <button
              v-if="idx < viewCounts"
              @click="handleState(state.city_code)"
              :class="[
                'rounded-md border border-[--color-11] px-5 py-2',
                { 'bg-[--color-12] text-white': isStates === state.city_code },
                { 'text-[--color-11]': !isStates },
              ]"
            >
              {{ state.en_name }} (0)
            </button>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            @click="handleExpand"
            class="flex items-center text-xl text-[--color-11]"
          >
            <template v-if="viewState"
              >{{ $t("state.view.collapse") }}
              <arrow_up setColor="#9071a7" />
            </template>
            <template v-else>
              {{ $t("state.view.expand") }}
              <arrow_down setColor="#9071a7" />
            </template>
          </button>
        </div>
      </div>
    </div>
    <div class="mb-5 flex py-2.5 text-2xl text-[--color-12]">
      {{ $t("filter.title.psychologists.USA") }}
      <button
        class="flex items-center rounded-md bg-[--color-11] px-5 py-1 text-xl text-white hover:brightness-110"
        @click="handleFilterBox"
      >
        <img src="@image/icons/filter.svg" alt="filter icon" class="pr-3" />
        <span class="">{{ $t("button.allFilter") }}</span>
      </button>
    </div>
    <FilterListsPanel v-if="isFilterBox" />
  </div>
</template>
