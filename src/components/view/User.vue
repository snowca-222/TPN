<script setup>
import { ref } from "vue";
import Button from "@/components/template/button/index.vue";
import WorldIcon from "@image/icons/world.vue";
import MailIcon from "@image/icons/mail.vue";

const userDetail = ref({
  name: "Christine Juang, PhD, DBSM",
  pronouns: "she/ her/ hers",
  service: "In-person visits only",
  licensed: "Licensed psychologist",
  state: "Missouri and California",
  mail: "dr.christinejuang@gmail.com",
  website: "https://psychtranslation.com/",
  Address: "",
  License_State: ["Missouri", "California", "Taiwan"],
  Licensure_Info: [
    {
      country: "USA",
      lists: [
        "Licensed Psychologist",
        "Licensed Clinical Social Work",
        "Licensed Marriage and Family Therapist",
        "Licensed Counselor",
      ],
    },
    {
      country: "Taiwan",
      lists: ["Clinical Psychologist"],
    },
  ],
  Language: ["English", "Mandarin"],
  Areas_of_Specialty: [
    "Family of origin",
    "International students",
    "Interpersonal relationships",
    "Trauma or PTSD",
  ],
  Populations_Served: ["Adults", "Older Adults"],
  Insurance: ["ACI Specialty", "Aetna"],
  Interstate_compact: [
    "Psychology Interjurisdictional Compact (PSYPACT).",
    "Counseling Compact",
  ],
  Sliding_scale: ["Yes"],
});

const listBox_left = ref([
  {
    type: "License State",
    title: "License State",
  },
  {
    type: "Licensure Info",
    title: "Licensure Info",
  },
  {
    type: "Language",
    title: "Language",
  },
]);
const listBox_right = ref([
  {
    type: "Areas of Specialty",
    title: "Areas of Specialty",
  },
  {
    type: "Populations Served",
    title: "Populations Served",
  },
  {
    type: "Insurance",
    title: "Insurance",
  },
  {
    type: "Interstate compact",
    title: "Interstate compact",
  },
  {
    type: "Sliding Scale",
    title: "Sliding Scale",
  },
]);
</script>
<template>
  <div>
    <div class="container mx-auto my-10">
      <div class="mb-10 flex flex-wrap justify-center">
        <div class="flex w-full items-center justify-center xl:w-4/12">
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
        <div class="flex w-full items-center p-10 xl:w-8/12">
          <div>
            <h3 class="w-fit text-[--mainTxt]">
              <span class="text-xl font-bold xl:text-[40px]">{{
                userDetail.name
              }}</span>
              <div class="whitespace-nowrap text-right text-sm xl:text-xl">
                ({{ userDetail.pronouns }})
              </div>
            </h3>
            <h4 class="text-base font-bold text-[--color-12] xl:text-2xl">
              {{ userDetail.service }}
            </h4>
            <ul class="text-[--color-2]">
              <li
                v-for="i in 2"
                :key="i"
                class="my-4 flex items-center [&>img]:w-4 [&>span]:ml-2 [&>span]:text-xl"
              >
                <template v-if="i === 1">
                  <MailIcon setColor="#8270b2" />
                  <span class="hidden text-xl md:block">{{
                    userDetail.mail
                  }}</span>
                </template>
                <template v-if="i === 2">
                  <WorldIcon setColor="#8270b2" />
                  <span class="hidden text-xl md:block">
                    <a :href="userDetail.website" target="_blank">Website</a>
                  </span></template
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full p-2.5 xl:w-4/12">
          <div class="rounded-md border border-[--color-22] bg-white p-2.5">
            <div
              v-for="list in listBox_left"
              :key="list.type"
              class="border-b border-b-[--color-22] p-3 last:border-b-0"
            >
              <span class="text-2xl font-bold text-[--color-12]">{{
                list.title
              }}</span>

              <ul class="list_style type_A">
                <template v-if="list.type === 'License State'">
                  <li v-for="item in userDetail.License_State" :key="item">
                    {{ item }}
                  </li>
                </template>
              </ul>
              <template v-if="list.type === 'Licensure Info'">
                <div v-for="item in userDetail.Licensure_Info" :key="item">
                  <span class="text-xl font-bold text-[--color-2]">{{
                    item.country
                  }}</span>
                  <ul class="list_style type_A">
                    <li v-for="list in item.lists" :key="list">
                      {{ list }}
                    </li>
                  </ul>
                </div>
              </template>
              <template v-if="list.type === 'Language'">
                <ul class="list_style type_A">
                  <li v-for="item in userDetail.Language" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </template>
            </div>
          </div>
        </div>
        <div class="w-full p-2.5 xl:w-8/12">
          <div
            v-for="list in listBox_right"
            :key="list.type"
            class="mb-6 rounded-md bg-[--color-23] p-6"
          >
            <span class="text-2xl font-bold text-[--color-12]">{{
              list.title
            }}</span>
            <ul class="list_style type_B">
              <template v-if="list.type === 'Areas of Specialty'">
                <li v-for="item in userDetail.Areas_of_Specialty" :key="item">
                  {{ item }}
                </li>
              </template>
              <template v-if="list.type === 'Populations Served'">
                <li v-for="item in userDetail.Populations_Served" :key="item">
                  {{ item }}
                </li>
              </template>
              <template v-if="list.type === 'Insurance'">
                <li v-for="item in userDetail.Insurance" :key="item">
                  {{ item }}
                </li>
              </template>
              <template v-if="list.type === 'Interstate compact'">
                <li v-for="item in userDetail.Interstate_compact" :key="item">
                  {{ item }}
                </li>
              </template>
              <template v-if="list.type === 'Sliding Scale'">
                <li v-for="item in userDetail.Sliding_scale" :key="item">
                  {{ item }}
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>

      <router-link :to="{ name: 'Home' }" class="mx-auto block w-fit">
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
  @apply py-2;
  &.type_A {
    li {
      @apply text-[--color-2] before:bg-[--color-2];
    }
  }
  &.type_B {
    li {
      @apply text-[--color-12] before:bg-[--color-12];
    }
  }
  li {
    @apply relative flex items-center py-2 pl-4 text-xl;
    &::before {
      @apply absolute left-0 h-1.5 w-1.5 rounded-full;
    }
  }
}
</style>
