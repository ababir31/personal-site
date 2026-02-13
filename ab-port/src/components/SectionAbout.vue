<script setup>
import aboutData from '@/assets/about-data.json'
import myImage from '@/assets/images/aboit-me.png'

import IconOnline from '@/components/icons/IconOnline.vue'
import IconOrganic from '@/components/icons/IconOrganic.vue'
import IconMarket from '@/components/icons/IconMarket.vue'
import IconBrand from '@/components/icons/IconBrand.vue'

const iconMap = {
  IconOnline,
  IconOrganic,
  IconMarket,
  IconBrand,
}
</script>

<template>
  <div class="bg-blue-600 w-full h-auto">
    <div class="py-16 md:py-24 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
      <!-- Left Content -->
      <div class="md:col-span-5 flex flex-col justify-between md:h-[70vh] gap-8">
        <div class="flex flex-col gap-6 text-center md:text-left">
          <h2 class="text-2xl sm:text-3xl md:text-[3rem] leading-tight text-white">Expertise</h2>
          <p class="text-blue-200 text-base! sm:text-lg! md:text-[1.722rem]! leading-[1.4em]!">
            I don’t just tell clients what to do and then leave it to them to figure out how. I can
            bring a project to life from scratch,
            <span class="text-white">make it functional and optimized</span>.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center md:items-end gap-6">
          <img
            :src="myImage"
            alt=""
            class="rounded-lg w-[140px] sm:w-[160px] md:w-[180px] h-auto"
          />
          <p
            class="text-white text-sm! sm:text-base! md:text-[1.125rem]! leading-6 font-normal text-center md:text-left"
          >
            There is no template to audit a site or no magic formula make it successful. Every
            project is different. That’s why my process takes time but it works.
          </p>
        </div>
      </div>

      <!-- Right Cards -->
      <div class="md:col-start-7 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="item in aboutData"
          :key="item.id"
          class="flex flex-col p-6 border border-blue-500 rounded-lg items-end justify-between"
        >
          <component :is="iconMap[item.icon]" />
          <div class="flex flex-col gap-4 text-right">
            <h3 class="text-lg! sm:text-xl! md:text-[1.444rem]! leading-snug text-blue-50">
              {{ item.title }}
            </h3>
            <p class="text-slate-200 text-sm! sm:text-base! md:text-[0.8rem]! leading-5">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>
