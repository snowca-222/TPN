<script setup>
import { ref, provide, inject, onMounted } from "vue";
import Button from "@/components/template/button/index.vue";
import FilterListsPanel from "@/components/template/filterBox/filterLists.vue";
import stateCounter from "@/components/template/filterBox/stateCounter.vue";
import flag_USA from "@image/flag/united-states.png";
import flag_TW from "@image/flag/taiwan.png";
import States_USA from "@/libs/js/states/USA.json";
import States_TW from "@/libs/js/states/TW.json";
import arrow_down from "@image/icons/arrow_drop_down.vue";
import arrow_up from "@image/icons/arrow_drop_up.vue";

const deviceWidth = inject("deviceWidth");
const countrySelect = inject("countrySelect");
const isStates = inject("isStates");
const memberSearchDatas = inject("memberSearchDatas");
const showStateResult = inject("showStateResult");

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

const states_TW_only = ref([
  {
    en_name: "Online consultation",
    ch_name: "線上諮商（全國各地皆可看診）",
    city_code: "Online",
  },
]);

const handleCountry = (setCountry) => {
  if (countrySelect.value !== setCountry) {
    countrySelect.value = setCountry;
    isStates.value = "All";
    showStateResult.value = false;
  }
};
const handleState = (setState) => {
  isStates.value = setState;
  showStateResult.value = false;
};

const viewState = ref(false);
const viewCounts = ref(0);
const handleExpand = () => {
  if (viewState.value) {
    viewState.value = false;
    // viewCounts.value = 17;
    handleSetCounts();
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
const handleSetCounts = () => {
  if (deviceWidth.value < 768) {
    viewCounts.value = 8;
  } else {
    viewCounts.value = 17;
  }
};
onMounted(() => {
  handleSetCounts();
  isStates.value = "All";
});

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
            v-ripple
            :class="[
              'relative rounded-full border border-[--color-11] transition-colors',
              'w-40 px-2.5 py-1.5 text-xl',
              'xl:w-[400px] xl:px-2.5 xl:py-3.5 xl:text-[28px]',
              {
                'btn_dark_purple z-[2] bg-[--color-12] text-white':
                  countrySelect === list.id,
              },
              {
                'bg-white text-[--color-11] hover:bg-[--color-12] hover:text-white hover:brightness-125':
                  countrySelect !== list.id,
              },
              {
                'left-4 xl:left-8': list.id === 'USA',
              },
              {
                'right-4 xl:right-8': list.id === 'TW',
              },
            ]"
          >
            <div class="flex items-center justify-center">
              <img
                class="hidden w-6 xl:block"
                :src="list.flag"
                :alt="list.id"
              />
              <span class="mx-2">{{ $t(list.name) }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="mb-5 py-2.5 text-[--color-12]">
        <span class="px-2.5 text-xl md:text-2xl">{{
          $t("filter.title.state")
        }}</span>

        <div
          class="flex flex-wrap text-xs sm:text-sm md:text-base [&>div]:px-2 [&>div]:py-1.5"
        >
          <div class="stateBtnWidth w-full">
            <button
              @click="handleState('All')"
              v-ripple
              :class="[
                'w-full rounded-md border border-[--color-11] px-5 py-2',
                {
                  'btn_dark_purple bg-[--color-12] text-white':
                    isStates === 'All',
                },
                { 'text-[--color-11]': !isStates },
              ]"
            >
              All (
              {{
                countrySelect === "USA"
                  ? memberSearchDatas.USA.length
                  : memberSearchDatas.TW.length
              }}
              )
            </button>
          </div>
          <template v-if="countrySelect === 'USA'">
            <template v-for="(state, idx) in States_USA" :key="state.city_code">
              <div v-if="idx < viewCounts" class="stateBtnWidth w-1/2">
                <stateCounter :state="state" />
              </div>
            </template>
          </template>

          <template v-else>
            <template v-for="(state, idx) in States_TW" :key="state.city_code">
              <div v-if="idx < viewCounts" class="stateBtnWidth w-1/2">
                <stateCounter :state="state" />
              </div>
            </template>
            <template v-for="state in states_TW_only" :key="state.city_code">
              <div
                v-if="States_TW.length + 1 < viewCounts"
                class="stateBtnWidth w-1/2"
              >
                <stateCounter :state="state" />
              </div>
            </template>
          </template>
        </div>
        <div class="flex justify-end">
          <button
            @click="handleExpand"
            class="flex items-center text-xl text-[--color-11] hover:brightness-75"
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
    <div
      class="mb-5 flex justify-between px-2.5 py-2.5 text-[--color-12] md:px-0"
    >
      <span class="w-3/4 px-2.5 text-sm sm:text-xl md:w-auto lg:text-2xl">
        <template v-if="countrySelect === 'USA'">
          {{ $t("filter.title.psychologists.USA") }}
        </template>
        <template v-else-if="countrySelect === 'TW'">
          {{ $t("filter.title.psychologists.TW") }}
        </template>
      </span>
      <button
        class="btn_purple flex items-center rounded-md px-5 py-1 text-xl text-white"
        @click="handleFilterBox"
      >
        <img src="@image/icons/filter.svg" alt="filter icon" />
        <span class="hidden pl-3 sm:block">{{ $t("button.allFilter") }}</span>
      </button>
    </div>
    <FilterListsPanel v-if="isFilterBox" />
  </div>
</template>
<style scoped>
.stateBtnWidth {
  @apply md:w-4/12 lg:w-3/12 xl:w-3/12 2xl:w-2/12;
}
</style>
