<script setup>
import { ref, onMounted, inject } from "vue";
import UserInfoBox from "@/components/template/userBoxOutside/index.vue";
import UserInfoBoxSkeleton from "@/components/template/userBoxOutside/index_skeleton.vue";
import { memberLists } from "@/libs/js/api/memberLists.js";
import { memberSearch_place } from "@/libs/js/fn";
import NotFound from "@/components/template/userList/notFound.vue";

const isLoading = ref(true);
const memberDatas = inject("memberDatas");
const memberSearchDatas = inject("memberSearchDatas");
const countrySelect = inject("countrySelect");
const isStates = inject("isStates");
const showStateResult = inject("showStateResult");
const showStateMember = inject("showStateMember");

onMounted(() => {
  if (!memberDatas.value) {
    memberLists()
      .then((res) => {
        // console.log(res.data);
        memberDatas.value = res.data; // api 接收
        memberSearchDatas.value.USA = memberSearch_place(
          "USA",
          isStates.value,
          memberDatas.value,
        );
        memberSearchDatas.value.TW = memberSearch_place(
          "TW",
          isStates.value,
          memberDatas.value,
        );
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
      <template v-if="showStateResult">
        <UserInfoBox
          v-for="memberData in showStateMember"
          :key="memberData.name"
          :memberData="memberData"
        />
      </template>
      <template v-else>
        <template v-if="countrySelect === 'USA'">
          <template v-if="memberSearchDatas.USA.length > 0">
            <UserInfoBox
              v-for="memberData in memberSearchDatas.USA"
              :key="memberData.name"
              :memberData="memberData"
            />
          </template>
          <NotFound v-else />
        </template>
        <template v-else-if="countrySelect === 'TW'">
          <template v-if="memberSearchDatas.TW.length > 0">
            <UserInfoBox
              v-for="memberData in memberSearchDatas.TW"
              :key="memberData.name"
              :memberData="memberData"
            />
          </template>
          <NotFound v-else />
        </template>
      </template>
    </template>
  </div>
</template>
