<script setup>
import { ref } from "vue";
import Button from "@/components/template/button/index.vue";

const userDetail = ref({
  name: "Christine Juang, PhD, DBSM",
  pronouns: "she / her / hers",
  licensed: "Licensed psychologist",
  state: "Missouri and California",
  mail: "dr.christinejuang@gmail.com",
});
</script>
<template>
  <div class="bg-[--mainColor]">
    <div class="container mx-auto my-2">
      <div class="my-6 rounded-md bg-[--thrColor] p-10">
        <div class="mx-auto flex w-fit items-center p-2.5">
          <div class="px-20 py-2.5">
            <img
              src="@image/icons/userIcon.png"
              alt="noPhotoUser"
              class="w-[300px] overflow-hidden rounded-full border-8 border-[--color-2] shadow-lg"
            />
          </div>
          <div class="p-2.5">
            <h3 class="relative w-fit text-[--mainTxt]">
              <span class="text-4xl font-bold">{{ userDetail.name }}</span>
              <div class="whitespace-nowrap text-right text-xl">
                ({{ userDetail.pronouns }})
              </div>
            </h3>
            <ul
              class="text-[--mainTxt] [&>li>img]:w-4 [&>li>span]:ml-2 [&>li>span]:text-lg [&>li]:my-4 [&>li]:flex"
            >
              <li>
                <img src="@image/icons/license.svg" alt="license icon" />
                <span>{{ userDetail.licensed }}</span>
              </li>
              <li>
                <img src="@image/icons/state.svg" alt="state icon" />
                <span>{{ userDetail.state }}</span>
              </li>
              <li>
                <img src="@image/icons/mail.svg" alt="mail icon" />
                <span>{{ userDetail.mail }}</span>
              </li>
            </ul>
            <div
              class="[&>button+button]:ml-6 [&>button]:my-6 [&>button]:rounded-md [&>button]:px-3 [&>button]:py-1 [&>button]:text-lg"
            >
              <button class="bg-[--color-7] text-white hover:brightness-125">
                Website
              </button>
              <button
                class="bg-[--color-9] text-[--color-10] hover:brightness-110"
              >
                Address
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 rounded-md bg-[--color-1] p-2.5 text-white">
        <h4 class="py-4 text-2xl font-bold">Areas of Specialty</h4>
        <ul class="list_style">
          <li>Family of origin</li>
          <li>International students</li>
          <li>Interpersonal relationships</li>
          <li>Trauma or PTSD</li>
        </ul>
      </div>
      <router-link :to="{ name: 'Home' }">
        <Button class="mx-auto my-20">
          <template #btnIcon>
            <div
              class="ml-1 aspect-[1/1] w-4 rotate-45 border-b-4 border-l-4 border-[--color-7]"
            ></div>
          </template>
          <template #btnName>Back</template>
        </Button>
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
.list_style {
  li {
    @apply relative flex items-center py-2 pl-4 before:bg-white;
    &::before {
      @apply absolute left-0 h-1.5 w-1.5 rounded-full;
    }
  }
}
</style>
