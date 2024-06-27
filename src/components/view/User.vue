<script setup>
import Button from "@/components/template/button/index.vue";
</script>
<template>
  <div>
    <div>User Page</div>
    <router-link :to="{ name: 'Home' }">
      <Button>
        <template #btnIcon>
          <div
            class="ml-1 aspect-[1/1] w-4 rotate-45 border-b-4 border-l-4 border-[--color-7]"
          ></div>
        </template>
        <template #btnName>Back</template>
      </Button>
    </router-link>
  </div>
</template>
