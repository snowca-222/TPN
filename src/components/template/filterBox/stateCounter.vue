<script setup>
import { ref, computed, inject } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  state: Object,
});
const memberSearchDatas = inject("memberSearchDatas");
const countrySelect = inject("countrySelect");
const isStates = inject("isStates");
const i18n = useI18n();

const isCounter = ref(0);

const handleState = (setState) => {
  isStates.value = setState;
  console.log(setState);
};

const counter = computed(() => {
  if (countrySelect.value === "USA") {
    memberSearchDatas.value.USA.filter((e) => {
      e.activeLicensed.forEach((state) => {
        if (state === props.state.en_name) {
          isCounter.value++;
        }
      });
    });
  } else {
    memberSearchDatas.value.TW.filter((e) => {
      e.servicesInTW.forEach((state) => {
        if (state === props.state.ch_name) {
          isCounter.value++;
        }
      });
    });
  }
  return isCounter.value;
});
</script>
<template>
  <button
    @click="handleState(state.city_code)"
    :disabled="counter === 0"
    v-ripple
    :class="[
      'w-full rounded-md border border-[--color-11] px-5 py-2 disabled:bg-gray-200 disabled:text-gray-400',
      {
        'btn_dark_purple bg-[--color-12] text-white':
          isStates === state.city_code,
      },
      { 'text-[--color-11]': !isStates },
    ]"
  >
    {{ i18n.locale.value === "en-US" ? state.en_name : state.ch_name }}
    <span class="pl-0.5">({{ counter }}) </span>
  </button>
</template>
