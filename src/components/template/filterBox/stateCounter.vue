<script setup>
import { ref, computed, inject } from "vue";
const props = defineProps({
  state: Object,
});
const memberSearchDatas = inject("memberSearchDatas");
const countrySelect = inject("countrySelect");
const isCounter = ref(0);
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
  <span class="pl-0.5">({{ counter }})</span>
</template>
