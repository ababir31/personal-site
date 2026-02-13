<script setup>
import IconLink from '@/components/icons/IconLink.vue'

import BlogData from '@/assets/blog-data.json'
</script>

<template>
  <!-- Header -->
  <div
    class="py-8 md:py-16 pt-[124px] mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-6 px-4 sm:px-6 lg:px-0"
  >
    <!-- Title -->
    <div class="col-span-1 md:col-span-6 text-center md:text-left">
      <h2
        class="text-3xl sm:text-3xl md:text-4xl lg:text-[3rem] leading-8 sm:leading-10 md:leading-[3rem] lg:leading-[3rem] text-blue-500"
      >
        My Writings
      </h2>
    </div>

    <!-- Description -->
    <div class="col-span-1 md:col-start-9 md:col-span-5 text-center md:text-left">
      <p
        class="text-sm! sm:text-sm! md:text-base! lg:text-[0.875rem] leading-5 md:leading-6 text-slate-600"
      >
        I've written one or two personal blog in my life. You know, besides my full-time SEO content
        writing job which getting thousands of traffic every month.
      </p>
    </div>
  </div>

  <!-- Blog List -->
  <div
    class="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 px-4 sm:px-6 lg:px-0 pb-[124px]"
  >
    <a
      v-for="items in BlogData"
      :key="items.id"
      :href="items.URL"
      target="_blank"
      class="group py-3 md:py-4 col-span-12 flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center border-t border-b border-blue-300 bg-slate-50 px-3 gap-4"
    >
      <!-- Icon -->
      <div class="flex-shrink-0">
        <icon-link class="rotate-0 duration-300 ease-out group-hover:rotate-25" />
      </div>

      <!-- Hover Image -->
      <div
        class="w-32 h-auto relative duration-300 ease-out opacity-0 left-2 group-hover:left-0 group-hover:opacity-100 hidden sm:block"
      >
        <img :src="items.image" alt="" class="absolute -bottom-12 left-0 w-full rounded-md" />
      </div>

      <!-- Title -->
      <div class="flex-1">
        <h3
          class="text-lg sm:text-xl md:text-[1.375rem] leading-6 sm:leading-7 text-slate-700 duration-500 ease-out group-hover:text-blue-500"
        >
          {{ items.title }}
        </h3>
      </div>

      <!-- Read Time -->
      <div class="text-sm sm:text-base text-slate-600">{{ items.read }}</div>
    </a>
  </div>
</template>



<style scoped></style>
