<script setup>
import Button from "@/components/template/button/index.vue";
import searchIcon from "@image/icons/search.svg";

const handleSearch = () => {
  console.log("search");
};
</script>
<template>
  <div>
    <div class="mb-2.5 rounded-md bg-[--thrColor]">
      <div class="text-center">Select country</div>
      <div class="flex justify-center">
        <button>USA</button>
        <button>Taiwan</button>
      </div>
    </div>
    <div class="rounded-md bg-[--thrColor] px-2.5">
      項目
      <div class="py-4">
        <Button :dropDown="false" class="mx-auto" @click="handleSearch">
          <template #btnIcon>
            <img :src="searchIcon" alt="searchIcon" class="-mt-1 ml-1" />
          </template>
          <template #btnName>{{ $t("button.search") }}</template>
        </Button>
      </div>
    </div>
  </div>
</template>
