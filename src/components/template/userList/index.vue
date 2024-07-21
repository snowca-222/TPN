<script setup>
import { ref, onMounted, inject } from "vue";
import UserInfoBox from "@/components/template/userBoxOutside/index.vue";
import UserInfoBoxSkeleton from "@/components/template/userBoxOutside/index_skeleton.vue";
import { memberLists } from "@/libs/js/api/memberLists.js";

const isLoading = ref(true);
const memberDatas = inject("memberDatas");
const memberSearchDatas = inject("memberSearchDatas");
const countrySelect = inject("countrySelect");

onMounted(() => {
  if (!memberSearchDatas.value) {
    memberLists()
      .then((res) => {
        // console.log(res.data);
        memberDatas.value = res.data; // api 接收
        memberSearchDatas.value = memberDatas.value; // 複製一份
        isLoading.value = false;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="flex flex-wrap rounded-md bg-[--thrColor]">
    <template v-if="isLoading">
      <UserInfoBoxSkeleton v-for="i in 3" :key="i" />
    </template>
    <template v-else>
      <template v-for="memberData in memberSearchDatas" :key="memberData.name">
        <template v-if="countrySelect === 'USA' && memberData.activeInUSA">
          <UserInfoBox :memberData="memberData" />
        </template>

        <template
          v-else-if="countrySelect === 'TW' && memberData.licensureTaiwan"
        >
          <UserInfoBox :memberData="memberData" />
        </template>
      </template>
      <!-- <div v-else class="w-full px-2.5 py-5">
        <img
          src="@image/icons/nodata.svg"
          alt="nodata"
          class="mx-auto w-60"
        />
        <div class="text-center text-2xl font-bold">Result Not Found</div>
        <p class="py-5 text-center text-gray-500">
          Oops...please try choosing a different filter setting.
        </p>
      </div> -->
    </template>
  </div>
</template>
