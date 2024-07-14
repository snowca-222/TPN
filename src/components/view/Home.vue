<script setup>
import Banner from "@/components/template/banner/index.vue";
import UserLists from "@/components/template/userList/index.vue";
import FilterBox from "@/components/template/filterBox/index.vue";
</script>

<template>
  <div>
    <Banner class="h-[507px]" />
    <div class="py-2.5">
      <div class="container mx-auto">
        <FilterBox />
        <UserLists />
      </div>
    </div>
  </div>
</template>
