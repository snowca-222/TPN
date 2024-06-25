<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const handleLangSet = (type) => {
  i18n.locale.value = type;
  localStorage.setItem("locale", type);
};
onMounted(() => {
  if (localStorage.getItem("locale")) {
    i18n.locale.value = localStorage.getItem("locale");
  } else {
    localStorage.setItem("locale", i18n.locale.value);
  }
});
</script>
<template>
  <div>
    <button @click="handleLangSet('en-US')" class="bg-green-500">英文</button>
    <button @click="handleLangSet('zh-TW')" class="bg-blue-500">中文</button>
  </div>
</template>
