<script setup>
import { ref, onMounted, inject } from "vue";
import "animate.css";
import { getTitle } from "@/libs/js/api/title.js";
const loading = inject("loading");
const getTitleInfo = () => {
  getTitle.then((res) => {
    if (res.status === 200) {
      setText.value = {
        title: res.data[0].Title,
        slogan: res.data[0].Slogan,
      };
    } else {
      setText.value = {
        title: "台美心理專業交流協會",
        slogan: "Taiwan Psychology Network Provider Directory",
      };
    }
    loading.value = false;
    doFadeIn.value = true;
  });
};

const setText = ref({
  title: "",
  slogan: "",
});

const handleDrag = () => {
  let height = document.body.offsetHeight;
  document.querySelector("#main").scrollTo({
    top: height,
    behavior: "smooth",
  });
};
onMounted(() => {
  getTitleInfo();
});
const doFadeIn = ref(false);
</script>
<template>
  <div class="relative">
    <div
      class="absolute left-0 right-0 top-1/2 mx-auto w-11/12 -translate-y-1/2"
    >
      <div
        :class="[
          'rounded-md bg-black/50 p-2.5 text-white',
          { 'animate__animated animate__fadeInUp': doFadeIn },
          { hidden: !doFadeIn },
        ]"
      >
        <h2 class="py-5 text-center text-lg font-bold md:text-2xl lg:text-4xl">
          {{ setText.title }}
        </h2>
        <p class="py-2 text-center text-base md:text-lg lg:text-xl">
          {{ setText.slogan }}
        </p>
      </div>
    </div>
    <div
      @click="handleDrag"
      class="absolute bottom-5 left-0 right-0 mx-auto flex w-fit flex-col items-center md:hidden"
    >
      <img
        src="@image/icons/drag-down.png"
        alt="dragDown"
        class="dragAnimation block w-10 invert"
      />
      <div class="pb-2 pt-1 text-white">Click / Drag</div>
    </div>
  </div>
</template>
<style scoped>
@keyframes dragDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  10%,
  20% {
    opacity: 1;
    transform: translateY(-30px);
  }
  70% {
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
}
.dragAnimation {
  animation: dragDown 1.5s ease-out infinite;
}
</style>
