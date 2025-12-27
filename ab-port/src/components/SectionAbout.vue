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
  <div class="bg-blue-600 object-cover w-full h-auto">
    <div class="py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6">
      <div class="col-span-5 flex flex-col justify-between h-[70dvh]">
        <div class="flex flex-col gap-8">
          <h2 class="text-[3rem] leading-12 text-white">Expertise</h2>
          <p class="text-blue-200 text-[1.722rem]! leading-[1.2em]!">
            I don’t just tell clients what to do and then leave it to them to figure out how. I can
            bring a project to life from scratch,
            <span class="text-white">make it functional and optimized</span>.
          </p>
        </div>

        <div class="flex items-end gap-6">
          <img :src="myImage" alt="" class="rounded-lg w-[180px] h-auto" />
          <p class="text-white text-[1.125rem]! leading-[1.6em]!">
            There is no template to audit a site or no magic formula make it successful. Every
            project is different. That’s my process takes time but it works.
          </p>
        </div>
      </div>
      <div class="col-start-7 col-span-6 grid grid-cols-2 gap-6">
        <div
          v-for="item in aboutData"
          :key="item.id"
          class="flex flex-col p-6 border border-blue-500 rounded-lg items-end justify-between"
        >
          <component :is="iconMap[item.icon]" />
          <div class="flex flex-col gap-4">
            <h3 class="text-[1.444rem] leading-[1.3em] text-blue-50">{{ item.title }}</h3>
            <p class="text-slate-200 text-[0.833rem]! leading-[1.6em]!">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
