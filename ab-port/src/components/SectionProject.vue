<script setup>
import prodOne from '@/assets/images/prod-one.png'
import prodTwo from '@/assets/images/prod-two.png'
import prodThree from '@/assets/images/prod-Three.png'
import prodFour from '@/assets/images/prod-Four.png'

import bgTab from '@/assets/images/bg-tab.png'
</script>

<template>
  <div class="bg-[url('@/assets/images/bgone.jpg')]">
    <div class="h-screen py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6 items-center">
      <div class="col-span-5">
        <h2 class="text-[3rem] leading-12 mb-8 text-slate-700">Payment System Business</h2>
        <p class="text-slate-500">
          The main challenge was time. I designed the full website from the client’s brief while
          coordinating with developers and the client to get it right on the first try.
        </p>
      </div>
      <div class="col-start-7 col-span-6 relative">
        <img :src="bgTab" alt="" class="w-full h-auto relative z-10" />
        <img
          :src="prodOne"
          alt=""
          class="absolute inset-x-0 bottom-0 mx-auto w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
        />
      </div>
    </div>
  </div>

  <div class="bg-[url('@/assets/images/bgthree.jpg')]">
    <div class="h-screen py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6 items-center">
      <div class="col-span-5">
        <h2 class="text-[3rem] leading-12 mb-8 text-slate-700">Digital Agency Business</h2>
        <p class="text-slate-500">
          This wasn’t just a project. It was my full-time role for two years. I worked content
          writing, video production, and design, and I also helped shape the rebranding and website
          for this brand.
        </p>
      </div>
      <div class="col-start-7 col-span-6 relative">
        <img :src="bgTab" alt="" class="w-full h-auto relative z-10" />
        <img
          :src="prodThree"
          alt=""
          class="absolute inset-x-0 bottom-0 mx-auto w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
        />
      </div>
    </div>
  </div>

  <div class="bg-[url('@/assets/images/bgtwo.jpg')]">
    <div class="h-screen py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6 items-center">
      <div class="col-span-5">
        <h2 class="text-[3rem] leading-12 text-slate-700">This is the title</h2>
        <p class="text-slate-500 text-[1.722rem]! leading-[1.2em]!">
          Long very long so long description here.
        </p>
      </div>
      <div class="col-start-7 col-span-6 relative">
        <img :src="bgTab" alt="" class="w-full h-auto relative z-10" />
        <img
          :src="prodTwo"
          alt=""
          class="absolute inset-x-0 bottom-0 mx-auto w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
        />
      </div>
    </div>
  </div>

  <div class="bg-[url('@/assets/images/bgfour.jpg')]">
    <div class="h-screen py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6 items-center">
      <div class="col-span-5">
        <h2 class="text-[3rem] leading-12 text-slate-700">This is the title</h2>
        <p class="text-slate-500 text-[1.722rem]! leading-[1.2em]!">
          Long very long so long description here.
        </p>
      </div>
      <div class="col-start-7 col-span-6 relative">
        <img :src="bgTab" alt="" class="w-full h-auto relative z-10" />
        <img
          :src="prodFour"
          alt=""
          class="absolute inset-x-0 bottom-0 mx-auto w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
