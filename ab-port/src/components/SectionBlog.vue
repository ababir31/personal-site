<script setup>
import IconLink from '@/components/icons/IconLink.vue'

import BlogData from '@/assets/blog-data.json'
</script>

<template>
  <div
    class="py-8 md:py-16 lg:pt-[124px] mx-auto max-w-[1200px] grid items-start grid-cols-1 md:grid-cols-12 gap-6 px-4 sm:px-6 lg:px-0"
  >
    <div class="col-span-1 md:col-span-6">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] leading-8 sm:leading-10 md:leading-12 lg:leading-12 text-blue-500"
      >
        My Writings
      </h2>
    </div>
    <div class="col-span-1 md:col-start-9 md:col-span-5">
      <p class="text-xs sm:text-sm md:text-base lg:text-[0.875rem]! leading-5 text-slate-600">
        I've written one or two personal blog in my life. You know, besides my full-time SEO content
        writing job which getting thousands of traffic every month.
      </p>
    </div>
  </div>

  <div
    class="mx-auto max-w-[1200px] grid items-start grid-cols-1 md:grid-cols-12 gap-0! px-4 sm:px-6 lg:px-0 lg:pb-[124px]"
  >
    <a
      v-for="items in BlogData"
      :key="items.id"
      :href="items.URL"
      target="_blank"
      class="group py-2 md:py-4 my-0 lg:py-4 col-span-12 flex flex-wrap justify-between items-center border-t border-b border-blue-300 bg-slate-50 px-3"
    >
      <div>
        <icon-link class="rotate-0 duration-240 ease-out group-hover:rotate-25" />
      </div>
      <div
        class="w-2xs h-auto relative duration-240 ease-out opacity-0 left-2 group-hover:left-0 group-hover:opacity-100"
      >
        <img :src="items.image" alt="" class="absolute -bottom-18 left-0" />
      </div>
      <div class="w-80">
        <h3
          class="text-[1.375rem]! leading-7 text-slate-700 duration-500 ease-out group-hover:text-blue-500"
        >
          {{ items.title }}
        </h3>
      </div>
      <div>{{ items.read }}</div>
    </a>
  </div>
</template>

<style scoped></style>
