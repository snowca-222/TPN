<script setup>
import { ref } from "vue";
import LangSelect from "@/components/template/language/index.vue";
import siteLogo from "@image/logo/TPN_logo.png";
import { handleScrollTop } from "@/libs/js/fn";
const showLangSelector = ref(true);
</script>
<template>
  <header class="flex bg-[--color-12] py-2">
    <div class="container m-auto">
      <div
        :class="[
          'flex items-center px-2.5',
          {
            'justify-between': showLangSelector === true,
          },
          {
            'justify-center': showLangSelector === false,
          },
        ]"
      >
        <router-link :to="{ name: 'Home' }" @click="handleScrollTop('instant')">
          <img :src="siteLogo" alt="TPN_logo" class="w-28 md:w-40" />
        </router-link>
        <LangSelect v-if="showLangSelector" />
      </div>
    </div>
  </header>
</template>
