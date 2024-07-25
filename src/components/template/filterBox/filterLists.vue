<script setup>
import { ref, inject, onMounted } from "vue";
import { filters_en } from "@/libs/js/filter/en-US.js";
import { filters_tw } from "@/libs/js/filter/zh-TW.js";
import { memberSearch_place } from "@/libs/js/fn";

const handleFilterBox = inject("handleFilterBox");
const memberDatas = inject("memberDatas"); // 利用原始資料進行搜尋
const memberSearchDatas = inject("memberSearchDatas");
const countrySelect = inject("countrySelect");
const isStates = inject("isStates");
const showStateResult = inject("showStateResult");

const filterCount = ref(0);
const setFilters = ref(countrySelect.value === "USA" ? filters_en : filters_tw); // 複製一組選單列，目的是為了即時顯示 checked 狀態
const handleCount = (check) => {
  check ? filterCount.value++ : filterCount.value--;
};

const ServiceCount = ref(0);
const handleServiceCheck = (list) => {
  if (list.checked) {
    handleServiceFilter("allFalse");
    list.checked = true;
    ServiceCount.value++;
    filterCount.value++;
    if (ServiceCount.value > 1) {
      ServiceCount.value--;
      filterCount.value--;
    }
  } else {
    ServiceCount.value = 0;
    filterCount.value--;
  }
};
const handleServiceFilter = (setEvent) => {
  setFilters.value.filter((e) => {
    if (e.title === "Services") {
      e.lists.forEach((list) => {
        if (setEvent === "allFalse") {
          list.checked = false;
        }
        if (setEvent === "checkTrue") {
          if (list.checked === true) {
            ServiceCount.value = 1;
          }
        }
      });
    }
  });
};

const handleClose = () => {
  handleReset();
  handleFilterBox();
};

const handleSearch = () => {
  handleFilterBox();
  isStates.value = "All";
  showStateResult.value = false;
  if (filterCount.value !== 0) {
    let values = {};
    setFilters.value.forEach((r) => {
      r.lists.forEach((rr) => {
        if (values[r.title] === undefined) {
          values[r.title] = {};
        }
        values[r.title][rr.type] = rr.checked;
      });
    });

    const result = memberDatas.value.filter((r) => {
      // console.log(r);
      let f = true;
      r.list.forEach((rr) => {
        rr.lists.forEach((rrr) => {
          if (
            values[rr.title][rrr.name] &&
            values[rr.title][rrr.name] !== rrr.hasService
          ) {
            f = false;
          }
        });
      });
      return f;
    });
    if (countrySelect.value === "USA") {
      memberSearchDatas.value.USA = memberSearch_place("USA", "All", result);
    } else {
      memberSearchDatas.value.TW = memberSearch_place("TW", "All", result);
    }
  } else {
    memberSearchDatas.value.USA = memberSearch_place(
      "USA",
      "All",
      memberDatas.value,
    );
    memberSearchDatas.value.TW = memberSearch_place(
      "TW",
      "All",
      memberDatas.value,
    );
  }
};
const handleSetCounts = () => {
  setFilters.value.forEach((r) => {
    r.lists.forEach((rr) => {
      if (rr.checked) {
        filterCount.value++;
      }
    });
  });
};
const handleReset = () => {
  filterCount.value = 0;
  ServiceCount.value = 0;
  setFilters.value.forEach((r) => {
    r.lists.forEach((rr) => {
      rr.checked = false;
    });
  });
};
onMounted(() => {
  handleSetCounts();
  handleServiceFilter("checkTrue");
});
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
          <button
            @click="handleReset"
            class="px-5 text-[--color-20] hover:brightness-110"
          >
            {{ $t("button.clearFilter") }}
          </button>
        </div>
        <button
          @click="handleClose"
          class="flex items-center rounded-full bg-black/50 px-2.5 text-xl text-gray-300 hover:brightness-125"
        >
          <div class="hidden pr-5 md:block">{{ $t("button.close") }}</div>
          <div class="relative h-1 w-5">
            <div
              class="absolute right-0 top-0 h-1 w-5 rotate-45 bg-gray-300"
            ></div>
            <div
              class="absolute right-0 top-0 h-1 w-5 -rotate-45 bg-gray-300"
            ></div>
          </div>
        </button>
      </div>
      <div
        class="h-[calc(73dvh)] overflow-y-auto bg-white [&>div:nth-child(even)]:bg-[#efefef]"
      >
        <div
          v-for="filterList in setFilters"
          :key="filterList.title"
          class="px-5"
        >
          <template v-if="filterList.title !== 'Pronouns'">
            <div class="py-2.5 font-bold text-[--color-11] xl:text-xl">
              {{ filterList.title }}
            </div>
            <div class="flex flex-col flex-wrap md:flex-row">
              <template v-if="filterList.title === 'Areas of Specialty'">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="flex w-full flex-col md:w-1/2 xl:w-1/4"
                >
                  <div
                    v-for="j in Math.ceil(filterList.lists.length / 4)"
                    :key="(i - 1) * 12 + j - 1"
                  >
                    <template
                      v-if="(i - 1) * 12 + j - 1 < filterList.lists.length"
                    >
                      <label
                        :class="[
                          'my-2 mr-2 flex cursor-pointer select-none items-start rounded-md px-2 py-1 text-xs transition-colors md:text-sm xl:text-base',
                          {
                            'bg-[--color-17] text-white':
                              filterList.lists[(i - 1) * 12 + j - 1].checked,
                          },
                          {
                            'bg-transparent text-[--color-14] hover:bg-[--color-6]':
                              !filterList.lists[(i - 1) * 12 + j - 1].checked,
                          },
                        ]"
                      >
                        <input
                          type="checkbox"
                          v-model="
                            filterList.lists[(i - 1) * 12 + j - 1].checked
                          "
                          @change="
                            handleCount(
                              filterList.lists[(i - 1) * 12 + j - 1].checked,
                            )
                          "
                          class="hidden"
                        />
                        <div
                          :class="[
                            'mr-1 hidden aspect-[1/1] w-5 rounded-sm border transition-colors',
                            {
                              'border-transparent bg-[--color-18]':
                                filterList.lists[(i - 1) * 12 + j - 1].checked,
                            },
                            {
                              'border-[--color-21] bg-transparent':
                                !filterList.lists[(i - 1) * 12 + j - 1].checked,
                            },
                          ]"
                        ></div>
                        <div class="w-fit">
                          {{ filterList.lists[(i - 1) * 12 + j - 1].name }}
                        </div>
                      </label>
                    </template>
                  </div>
                </div>
              </template>
              <template v-else-if="filterList.title === 'Services'">
                <label
                  v-for="list in filterList.lists"
                  :key="list.name"
                  :class="[
                    'my-2 mr-4 flex cursor-pointer select-none items-center rounded-md px-2 py-1 text-xs transition-colors md:text-sm xl:text-base',
                    { 'bg-[--color-17] text-white': list.checked },
                    {
                      'bg-transparent text-[--color-14] hover:bg-[--color-6]':
                        !list.checked,
                    },
                  ]"
                >
                  <input
                    @change="handleServiceCheck(list)"
                    type="checkbox"
                    v-model="list.checked"
                    class="hidden"
                  />
                  <div
                    :class="[
                      'mr-1 hidden aspect-[1/1] w-5 rounded-sm border transition-colors',
                      {
                        'border-transparent bg-[--color-18]': list.checked,
                      },
                      { 'border-[--color-21] bg-transparent': !list.checked },
                    ]"
                  ></div>
                  <div class="w-fit">{{ list.name }}</div>
                </label>
              </template>
              <template v-else>
                <label
                  v-for="list in filterList.lists"
                  :key="list.name"
                  :class="[
                    'my-2 mr-4 flex cursor-pointer select-none items-center rounded-md px-2 py-1 text-xs transition-colors md:text-sm xl:text-base',
                    { 'bg-[--color-17] text-white': list.checked },
                    {
                      'bg-transparent text-[--color-14] hover:bg-[--color-6]':
                        !list.checked,
                    },
                  ]"
                >
                  <input
                    type="checkbox"
                    v-model="list.checked"
                    @change="handleCount(list.checked)"
                    class="hidden"
                  />
                  <div
                    :class="[
                      'mr-1 hidden aspect-[1/1] w-5 rounded-sm border transition-colors',
                      {
                        'border-transparent bg-[--color-18]': list.checked,
                      },
                      { 'border-[--color-21] bg-transparent': !list.checked },
                    ]"
                  ></div>
                  <div class="w-fit">{{ list.name }}</div>
                </label>
              </template>
            </div>
          </template>
        </div>
      </div>
      <div
        class="flex items-center justify-between rounded-b-lg bg-[--color-14] px-5 py-5"
      >
        <div class="text-white">( Selected: {{ filterCount }} )</div>

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
