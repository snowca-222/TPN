<script setup>
import { ref, inject } from "vue";
import { filters } from "@/libs/js/filter/en-US.js";
const handleFilterBox = inject("handleFilterBox");
// 假設的用戶
const userList = ref([
  {
    name: "AAA",
    lists: [
      {
        title: "Sliding scale",
        lists: [
          {
            name: "sliding scale",
            hasService: true,
          },
        ],
      },
      {
        title: "Services",
        lists: [
          {
            name: "In-person visits",
            hasService: false,
          },
          {
            name: "Telehealth visit",
            hasService: false,
          },
        ],
      },
    ],
  },
  {
    name: "BBB",
    lists: [
      {
        title: "Sliding scale",
        lists: [
          {
            name: "sliding scale",
            hasService: false,
          },
        ],
      },
      {
        title: "Services",
        lists: [
          {
            name: "In-person visits",
            hasService: true,
          },
          {
            name: "Telehealth visit",
            hasService: false,
          },
        ],
      },
    ],
  },
  {
    name: "CCC",
    lists: [
      {
        title: "Sliding scale",
        lists: [
          {
            name: "sliding scale",
            hasService: true,
          },
        ],
      },
      {
        title: "Services",
        lists: [
          {
            name: "In-person visits",
            hasService: true,
          },
          {
            name: "Telehealth visit",
            hasService: true,
          },
        ],
      },
    ],
  },
]);

const filterResult = ref(userList.value);
const filterCount = ref(0);
const setFilters = ref(filters); // 複製一組選單列，目的是為了即時顯示 checked 狀態
const handleCount = (check) => {
  check ? filterCount.value++ : filterCount.value--;
};

const handleSearch = () => {
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

    const result = userList.value.filter((r) => {
      let f = true;
      r.lists.forEach((rr) => {
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
    filterResult.value = result;
  } else {
    filterResult.value = userList.value;
  }
};
const handleReset = () => {
  setFilters.value.forEach((r) => {
    r.lists.forEach((rr) => {
      rr.checked = false;
    });
  });
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
          <button
            @click="handleReset"
            class="px-5 text-[--color-20] hover:brightness-110"
          >
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
      <div
        class="h-[calc(73dvh)] overflow-y-auto bg-white px-5 [&>div:nth-child(even)]:bg-[#efefef]"
      >
        <div v-for="filterList in setFilters" :key="filterList.title">
          <div class="py-2.5 text-xl font-bold text-[--color-11]">
            {{ filterList.title }}
          </div>
          <div class="flex flex-wrap">
            <label
              v-for="list in filterList.lists"
              :key="list.name"
              :class="[
                'my-2 mr-2 flex cursor-pointer select-none items-center rounded-md border border-[--color-14] px-2 py-1 transition-colors',
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
                  'mr-1 aspect-[1/1] w-3 rounded-sm border transition-colors',
                  {
                    'border-transparent bg-[--color-18]': list.checked,
                  },
                  { 'border-[--color-21] bg-transparent': !list.checked },
                ]"
              ></div>
              {{ list.name }}
            </label>
          </div>
        </div>
        <div>
          測試:
          <div
            v-for="user in filterResult"
            :key="user.name"
            class="my-2 border p-2"
          >
            <div>名: {{ user.name }}</div>
            <div>
              技:
              <ul v-for="lists in user.lists" :key="lists.title">
                <li v-for="list in lists.lists" :key="list.type">
                  <div v-if="list.hasService">{{ list.name }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
