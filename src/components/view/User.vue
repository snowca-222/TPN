<script setup>
import { ref } from "vue";
import Button from "@/components/template/button/index.vue";
import WorldIcon from "@image/icons/world.vue";
import MailIcon from "@image/icons/mail.vue";

const userDetail = ref({
  name: "Christine Juang, PhD, DBSM",
  pronouns: "she / her / hers",
  service: "In-person visits",
  licensed: "Licensed psychologist",
  state: "Missouri and California",
  mail: "dr.christinejuang@gmail.com",
});
</script>
<template>
  <div>
    <div class="container mx-auto my-2">
      <div class="flex flex-wrap justify-center">
        <div class="flex w-4/12 items-center justify-center bg-red-300">
          <div
            class="flex aspect-[1/1] w-[380px] items-center justify-center rounded-xl bg-[--color-13] shadow-md"
          >
            <img
              src="@image/icons/userIcon.png"
              alt="noPhotoUser"
              class="w-[300px] overflow-hidden rounded-full border-8 border-[--color-2] shadow-lg"
            />
          </div>
        </div>
        <div class="w-8/12 bg-green-300">
          <h3 class="relative w-fit text-[--mainTxt]">
            <span class="text-[40px] font-bold">{{ userDetail.name }}</span>
            <div class="whitespace-nowrap text-right text-xl">
              ({{ userDetail.pronouns }})
            </div>
          </h3>
          <h4 class="text-2xl font-bold text-[--color-12]">
            {{ userDetail.service }}
          </h4>
          <ul
            class="text-[--color-2] [&>li>img]:w-4 [&>li>span]:ml-2 [&>li>span]:text-xl [&>li]:my-4 [&>li]:flex"
          >
            <li>
              <MailIcon setColor="#8270b2" />
              <span class="text-xl">{{ userDetail.mail }}</span>
            </li>
            <li>
              <WorldIcon setColor="#8270b2" />
              <span class="text-xl">{{ userDetail.mail }}</span>
            </li>
          </ul>
        </div>

        <!-- <div
          class="flex aspect-[1/1] w-[380px] items-center justify-center rounded-xl bg-[--color-13] shadow-md"
        >
          <img
            src="@image/icons/userIcon.png"
            alt="noPhotoUser"
            class="w-[300px] overflow-hidden rounded-full border-8 border-[--color-2] shadow-lg"
          />
        </div>
        <div class="w-[660px] bg-green-500">XD</div> -->
      </div>
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
