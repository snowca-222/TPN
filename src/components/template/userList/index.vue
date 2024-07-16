<script setup>
import { ref, onMounted } from "vue";
import UserInfoBox from "@/components/template/userBoxOutside/index.vue";
import UserInfoBoxSkeleton from "@/components/template/userBoxOutside/index_skeleton.vue";
import { memberLists } from "@/libs/js/api/memberLists.js";
const userDatas = ref([
  {
    name: "Christine Juang, PhD, DBSM ",
    license: "Licensed Psychologist",
    place: "Missouri and California",
    email: "dr.christinjuang@gmail.com",
    website: "https://psychtranslation.com/",
  },
  {
    name: "Wei-Chiung Chen-Martinez, LCPC, BC-DMT ",
    license: "Licensed Psychologist",
    place: "Niles",
    email: "chiung@truecolorspsychotherapy.com",
    website:
      "https://www.psychologytoday.com/us/therapists/wei-chiung-chen-martinez-niles-il/321447",
  },
  {
    name: "Wei-Chiao Hsu, PhD ",
    license: "Licensed Psychologist",
    place: "Madison",
    email: "weichiao.hsu@wisc.edu",
    website: "",
  },
  {
    name: "Jun-chih Gisela Lin, Ph.D., ABPP ()",
    license: "Licensed Psychologist",
    place: "Sandia Plaza",
    email: "DrLinCares@counselingmail.com",
    website: "https://drlincares.com/",
  },
  {
    name: "Peter Lin, Ph.D. ()",
    license: "Licensed Psychologist",
    place: "New York",
    email: "pl2107@columbia.edu",
    website: "",
  },
]);

const isLoading = ref(true);
const memberDatas = ref();

function getMemberData() {
  return Promise.resolve(userDatas);
}

onMounted(() => {
  // 模擬取得 api 資料
  // setTimeout(() => {
  //   getMemberData().then((res) => {
  //     memberDatas.value = res.value;
  //     isLoading.value = false;
  //   });
  // }, 2000);
  memberLists()
    .then((res) => {
      console.log(res.data);
      memberDatas.value = res.data;
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <div class="flex flex-wrap rounded-md bg-[--thrColor]">
    <template v-if="isLoading">
      <UserInfoBoxSkeleton v-for="i in 3" :key="i" />
    </template>
    <template v-else>
      <UserInfoBox
        v-for="memberData in memberDatas"
        :key="memberData.name"
        :memberData="memberData"
      />
    </template>
  </div>
</template>
