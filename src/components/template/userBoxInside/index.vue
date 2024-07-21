<script setup>
import { ref, onMounted, inject } from "vue";
import WorldIcon from "@image/icons/world.vue";
import MailIcon from "@image/icons/mail.vue";
const countrySelect = inject("countrySelect");
const props = defineProps({
  memberData: Object,
});

const service = ref({
  name: "",
  hasService: true,
});
const setService = () => {
  props.memberData.list.filter((e) => {
    if (e.title === "Services") {
      e.lists.filter((event2) => {
        if (event2.hasService === true) service.value = event2;
      });
    }
  });
};

const areas_of_specialty = ref([]);
const setAoS = () => {
  props.memberData.list.filter((e) => {
    if (e.title === "Areas of Specialty") {
      e.lists.filter((event2) => {
        if (event2.hasService === true) {
          areas_of_specialty.value.push(event2);
        }
      });
    }
  });
};

onMounted(() => {
  setService();
  setAoS();
});

const listBox_left = ref([
  {
    type: "License State",
    title: "License State",
  },
  {
    type: "Licensure Info",
    title: "Licensure Info",
  },
  {
    type: "Language",
    title: "Language",
  },
]);
const listBox_right = ref([
  {
    type: "Areas of Specialty",
    title: "Areas of Specialty",
  },
  {
    type: "Populations Served",
    title: "Populations Served",
  },
  {
    type: "Interstate compact",
    title: "Interstate compact",
  },
  {
    type: "Sliding Scale",
    title: "Sliding Scale",
  },
  {
    type: "Insurance",
    title: "Insurance",
  },
]);
</script>
<template>
  <div>
    <div class="mb-10 flex flex-wrap justify-center">
      <div class="flex w-full items-center justify-center md:w-4/12">
        <div
          class="flex aspect-[1/1] w-60 items-center justify-center rounded-xl bg-[--color-13] shadow-md sm:w-[380px]"
        >
          <div
            class="aspect-[1/1] w-48 rounded-full border-8 border-[--color-2] bg-cover bg-center shadow-lg sm:w-[300px]"
            :style="`background-image: url(${memberData.photoImg})`"
          ></div>
        </div>
      </div>
      <div
        class="flex w-full items-center justify-center p-2.5 sm:p-10 md:w-8/12 md:justify-start"
      >
        <div>
          <h3 class="w-fit text-[--mainTxt]">
            <span
              class="text-xl font-bold sm:text-2xl md:text-3xl xl:text-[40px]"
            >
              <template v-if="countrySelect === 'USA'">
                {{ memberData.memberName_en }}
              </template>
              <template v-else-if="countrySelect === 'TW'">
                {{ memberData.memberName_ch }}
              </template>
            </span>
            <div
              v-if="memberData.pronouns"
              class="whitespace-nowrap text-sm md:text-lg xl:text-xl"
            >
              ({{ memberData.pronouns }})
            </div>
          </h3>
          <h4 class="text-base font-bold text-[--color-12] xl:text-2xl">
            {{ service.name }}
          </h4>
          <ul class="flex text-[--color-2] sm:flex-col">
            <li
              v-for="i in 2"
              :key="i"
              :class="[
                'mt-4 flex w-1/2 items-center px-1',
                'sm:w-full sm:px-0',
              ]"
            >
              <template v-if="i === 1">
                <a
                  :href="`mailto:${memberData.mail}`"
                  :class="[
                    'flex w-full items-center justify-center rounded-full border-2 border-[--color-22] py-2 shadow-md',
                    'sm:w-fit sm:justify-start sm:border-0 sm:py-0 sm:shadow-none',
                  ]"
                >
                  <MailIcon setColor="#8270b2" class="h-9 w-9 sm:h-5 sm:w-5" />
                  <span class="ml-2 hidden text-xl sm:block">
                    {{ memberData.mail }}
                  </span>
                </a>
              </template>
              <template v-if="i === 2">
                <a
                  :href="memberData.website"
                  target="_blank"
                  :class="[
                    'flex w-full items-center justify-center rounded-full border-2 border-[--color-22] py-2 shadow-md',
                    'sm:w-fit sm:justify-start sm:border-0 sm:py-0 sm:shadow-none',
                  ]"
                >
                  <WorldIcon setColor="#8270b2" class="h-9 w-9 sm:h-9 sm:w-5" />
                  <span class="ml-2 hidden text-xl sm:block"> Website </span>
                </a>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="w-full p-2.5 xl:w-4/12">
        <div class="rounded-md border border-[--color-22] bg-white p-2.5">
          <div
            v-for="list in listBox_left"
            :key="list.type"
            class="border-b border-b-[--color-22] p-3 last:border-b-0"
          >
            <span class="text-base font-bold text-[--color-12] sm:text-2xl">{{
              list.title
            }}</span>

            <ul class="list_style type_A">
              <template v-if="list.type === 'License State'">
                <li v-for="item in memberData.activeLicensed" :key="item">
                  {{ item }}
                </li>
              </template>
            </ul>
            <template v-if="list.type === 'Licensure Info'">
              <template v-if="memberData.activeInUSA">
                <div>
                  <span class="text-sm font-bold text-[--color-2] md:text-xl"
                    >USA</span
                  >
                  <ul class="list_style type_A">
                    <li
                      v-for="(list, idx) in memberData.activeLists"
                      :key="idx"
                    >
                      {{ list }}
                    </li>
                  </ul>
                </div>
              </template>
              <template v-if="memberData.activeInTW">
                <div>
                  <span class="text-sm font-bold text-[--color-2] md:text-xl"
                    >Taiwan</span
                  >
                  <ul class="list_style type_A">
                    <li>{{ memberData.activeInTW }}</li>
                  </ul>
                </div>
              </template>
            </template>
            <template v-if="list.type === 'Language'">
              <ul class="list_style type_A">
                <li v-for="item in memberData.language" :key="item">
                  {{ item }}
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
      <div class="w-full p-2.5 xl:w-8/12">
        <div
          v-for="list in listBox_right"
          :key="list.type"
          class="mb-6 rounded-md bg-[--color-23] p-6"
        >
          <span class="font-bold text-[--color-12] sm:text-2xl">{{
            list.title
          }}</span>
          <ul class="list_style type_B">
            <template v-if="list.type === 'Areas of Specialty'">
              <li v-for="item in areas_of_specialty" :key="item">
                {{ item.name }}
              </li>
            </template>
            <template v-if="list.type === 'Populations Served'">
              <li v-for="item in memberData.served" :key="item">
                {{ item }}
              </li>
            </template>
            <template v-if="list.type === 'Interstate compact'">
              <li v-for="item in memberData.interstate_compact" :key="item">
                {{ item }}
              </li>
            </template>
            <template v-if="list.type === 'Insurance'">
              <li>
                {{ memberData.insurance ? "Yes" : "No" }}
              </li>
            </template>
            <template v-if="list.type === 'Sliding Scale'">
              <li>
                {{ memberData.sliding_scale ? "Yes" : "No" }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.list_style {
  @apply py-2;
  &.type_A {
    li {
      @apply text-[--color-2] before:bg-[--color-2];
    }
  }
  &.type_B {
    li {
      @apply text-[--color-12] before:bg-[--color-12];
    }
  }
  li {
    @apply relative flex items-start py-2 pl-4 text-sm sm:text-xl;
    &::before {
      @apply absolute left-0 top-3.5 h-1.5 w-1.5 rounded-full sm:top-[18px];
    }
  }
}
</style>
