<script setup>
import { ref, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import Button from "@/components/template/button/index.vue";

import { handleScrollTop } from "@/libs/js/fn";
import { memberLists } from "@/libs/js/api/memberLists.js";
import UserDetailBox from "@/components/template/userBoxInside/index.vue";
import UserDetailBoxSkeleton from "@/components/template/userBoxInside/index_skeleton.vue";
const memberSearchDatas = inject("memberSearchDatas");

const route = useRoute();
const isLoading = ref(true);

const keyID = Number(route.query.member);
const memberDetail = ref();
onMounted(() => {
  if (memberSearchDatas.value) {
    // 用戶是從上層進入時
    memberSearchDatas.value.filter((e) => {
      isLoading.value = false;
      if (e.keyID === keyID) {
        memberDetail.value = e;
      }
    });
  } else {
    // 用戶是透過連結網址直接進來時
    memberLists().then((res) => {
      isLoading.value = false;
      res.data.filter((e) => {
        if (e.keyID === keyID) {
          memberDetail.value = e;
        }
      });
    });
  }
});
</script>
<template>
  <div>
    <div class="container mx-auto my-10">
      <UserDetailBoxSkeleton v-if="isLoading" />
      <UserDetailBox v-else :memberData="memberDetail" />

      <router-link
        :to="{ name: 'Home' }"
        class="mx-auto block w-fit"
        @click="handleScrollTop('instant')"
      >
        <Button class="mx-auto my-10">
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
