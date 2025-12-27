<script setup>
const { buttontxt } = defineProps({
  buttontxt: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="group overflow-hidden border-2 rounded-sm border-white duration-300 ease-out hover:border-blue-700 flex"
  >
    <a
      class="leading-none duration-300 ease-out group-hover:text-white relative px-8 py-4"
      href="#"
    >
      {{ buttontxt }}
      <span class="absolute inset-0 -z-1 bg-slate-200 w-48 h-16"></span>
      <span
        class="absolute inset-y-16 duration-300 ease-[cubic-bezier(.17,.67,.83,.67)] group-hover:-inset-y-0 inset-x-0 -z-1 bg-blue-500 w-48 h-16"
      ></span>
    </a>
  </div>
</template>

<style scoped></style>
