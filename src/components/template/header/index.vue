<script setup>
import LangSelect from "@/components/template/language/index.vue";
import siteLogo from "@image/logo/TPN_logo.png";
</script>
<template>
  <header
    class="flex h-[130px] border-b-4 border-[--subColor] bg-[--mainColor]"
  >
    <div class="container m-auto">
      <div class="flex items-center justify-between px-2.5">
        <img :src="siteLogo" alt="TPN_logo" class="w-40" />
        <LangSelect />
      </div>
    </div>
  </header>
</template>
