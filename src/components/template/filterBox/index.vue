<script setup>
import { ref, provide, inject, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Button from "@/components/template/button/index.vue";
import FilterListsPanel from "@/components/template/filterBox/filterLists.vue";
import flag_USA from "@image/flag/united-states.png";
import flag_TW from "@image/flag/taiwan.png";
import States_USA from "@/libs/js/states/USA.json";
import States_TW from "@/libs/js/states/TW.json";
import arrow_down from "@image/icons/arrow_drop_down.vue";
import arrow_up from "@image/icons/arrow_drop_up.vue";

const i18n = useI18n();
const deviceWidth = inject("deviceWidth");
const countrySelect = inject("countrySelect");
const isStates = inject("isStates");
const memberSearchDatas = inject("memberSearchDatas");

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
  countrySelect.value = setCountry;
  // console.log(storeMemberDatas.value);
};
const handleState = (setState) => {
  isStates.value = setState;
};
const viewState = ref(false);
const viewCounts = ref(0);
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
const handleSetCounts = () => {
  if (deviceWidth.value < 768) {
    viewCounts.value = 8;
  } else {
    viewCounts.value = 17;
  }
};
onMounted(() => {
  handleSetCounts();
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
          class="flex flex-wrap text-sm md:text-base [&>div]:px-2 [&>div]:py-1.5"
        >
          <div class="w-full md:w-3/12 xl:w-2/12">
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
              <div v-if="idx < viewCounts" class="w-1/2 md:w-3/12 xl:w-2/12">
                <button
                  @click="handleState(state.city_code)"
                  v-ripple
                  :class="[
                    'w-full rounded-md border border-[--color-11] px-5 py-2',
                    {
                      'btn_dark_purple bg-[--color-12] text-white':
                        isStates === state.city_code,
                    },
                    { 'text-[--color-11]': !isStates },
                  ]"
                >
                  {{
                    i18n.locale.value === "en-US"
                      ? state.en_name
                      : state.ch_name
                  }}
                  (0)
                </button>
              </div>
            </template>
          </template>

          <template v-else>
            <template v-for="(state, idx) in States_TW" :key="state.city_code">
              <div v-if="idx < viewCounts" class="w-1/2 md:w-3/12 xl:w-2/12">
                <button
                  @click="handleState(state.city_code)"
                  v-ripple
                  :class="[
                    'w-full rounded-md border border-[--color-11] px-5 py-2',
                    {
                      'btn_dark_purple bg-[--color-12] text-white':
                        isStates === state.city_code,
                    },
                    { 'text-[--color-11]': !isStates },
                  ]"
                >
                  {{
                    i18n.locale.value === "en-US"
                      ? state.en_name
                      : state.ch_name
                  }}
                  (0)
                </button>
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
