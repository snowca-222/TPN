<script setup></script>
<template>
  <div class="w-1/2 p-2.5">
    <div
      class="rounded-md bg-[--color-1] p-2.5 transition-colors hover:bg-[--color-2]"
    >
      <img
        class="m-auto aspect-[1/1] w-[150px]"
        src="@image/icons/userIcon.png"
        alt="noPhotoUser"
      />
      <div class="text-white">
        <div class="my-5 text-center text-xl font-bold">
          Christine Juang, PhD, DBSM
        </div>
        <ul class="m-auto my-5 w-fit text-sm [&>li]:py-1">
          <li>Licensed Psychologist</li>
          <li>Missouri and California</li>
          <li>Email Address</li>
        </ul>
      </div>
      <div class="flex [&>a]:w-full [&>a]:px-2.5">
        <a href="https://www.google.com/" target="_blank">
          <button
            class="w-full rounded-md bg-[--color-6] py-2.5 text-sm text-[--color-7] hover:bg-[--color-3] hover:text-[--color-17]"
          >
            Website
          </button>
        </a>
        <router-link :to="{ name: 'User' }">
          <button
            class="w-full rounded-md bg-[--color-9] py-2.5 text-sm text-[--color-10] hover:bg-[--color-4] hover:text-[--color-5]"
          >
            View Profile
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
