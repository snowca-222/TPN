<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Button from "@/components/template/button/index.vue";
import langIcon from "@image/icons/world.svg";
const i18n = useI18n();
const isDropdown = ref(false);
const showSelectLang = ref("");

const handleDropdown = () => {
  isDropdown.value ? (isDropdown.value = false) : (isDropdown.value = true);
};

const handleLangSet = (type) => {
  i18n.locale.value = type;
  localStorage.setItem("locale", type);
  isDropdown.value = false;
  handleLangTxt();
};

const handleLangTxt = () => {
  switch (i18n.locale.value) {
    case "en-US":
      showSelectLang.value = "English";
      break;
    case "zh-TW":
      showSelectLang.value = "中文";
      break;
    default:
      showSelectLang.value = "English";
      break;
  }
};
onMounted(() => {
  if (localStorage.getItem("locale")) {
    i18n.locale.value = localStorage.getItem("locale");
    handleLangTxt();
  } else {
    localStorage.setItem("locale", i18n.locale.value);
    showSelectLang.value = "English";
  }
});
</script>
<template>
  <div class="relative">
    <Button :dropDown="true" :isDropDown="isDropdown" @click="handleDropdown">
      <template #btnIcon>
        <img :src="langIcon" alt="" />
      </template>
      <template #btnName>{{ showSelectLang }}</template>
    </Button>
    <ul
      v-if="isDropdown"
      class="absolute w-full rounded-b-2xl bg-[--color-17] text-center"
    >
      <li v-for="i in 2" class="m-3" :key="i">
        <button
          @click="handleLangSet(i === 1 ? 'en-US' : 'zh-TW')"
          class="w-full rounded-full bg-white text-[--color-7] hover:bg-[--color-18] hover:text-white"
        >
          <template v-if="i === 1"> English </template>
          <template v-else> 中文 </template>
        </button>
      </li>
    </ul>
  </div>
</template>
