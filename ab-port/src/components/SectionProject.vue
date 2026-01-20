<script setup>
import prodOne from '@/assets/images/prod-one.png'
import prodTwo from '@/assets/images/prod-two.png'
import prodThree from '@/assets/images/prod-Three.png'
import prodFour from '@/assets/images/prod-Four.png'

import bgTab from '@/assets/images/bg-tab.png'

import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionOne = ref(null)
const sectionOneText = ref(null)
const sectionOneImage = ref(null)

onMounted(() => {
  console.log(sectionOne.value)
  console.log(sectionOneText.value)
  console.log(sectionOneImage.value)

  console.log(ScrollTrigger)

  ScrollTrigger.create({
    trigger: sectionOne.value,
    start: 'top top',
    end: '+=100%',
    scrub: true,
    onUpdate: (self) => {
      console.log('scroll progress:', self.progress)
    },
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionOne.value,
      start: 'top top',
      end: '+=100%',
      scrub: true,
    },
  })

  tl.from(sectionOneText.value, {
    y: 80,
    opacity: 0,
    ease: 'none',
  })
})
</script>

<template>
  <div ref="sectionOne" class="bg-[url('@/assets/images/bgone.jpg')] bg-cover">
    <div class="h-screen py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6 items-center">
      <div ref="sectionOneText" class="col-span-5">
        <h2 class="text-[3rem] leading-12 mb-8 text-slate-700">Payment System Business</h2>
        <p class="text-slate-500">
          The main challenge was time. I designed the full website from the client’s brief while
          coordinating with developers and the client to get it right on the first try.
        </p>
      </div>
      <div ref="sectionOneImage" class="col-start-7 col-span-6 relative">
        <img :src="bgTab" alt="" class="w-full h-auto relative z-10" />
        <img
          :src="prodOne"
          alt=""
          class="absolute inset-x-0 bottom-0 mx-auto w-auto z-0 rounded-3xl drop-shadow-2xl drop-shadow-neutral-500"
        />
      </div>
    </div>
  </div>

  <div class="bg-[url('@/assets/images/bgthree.jpg')] bg-cover">
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

  <div class="bg-[url('@/assets/images/bgtwo.jpg')] bg-cover">
    <div class="h-screen py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6 items-center">
      <div class="col-span-5">
        <h2 class="text-[3rem] leading-12 mb-8 text-slate-700">Tech News Reporting</h2>
        <p class="text-slate-500">
          Not just the UI. I build the whole brand from scratch, making it scream ‘tech’ without
          scaring anyone off. And to make it easy I developed it using WordPress & Elementor.
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

  <div class="bg-[url('@/assets/images/bgfour.jpg')] bg-cover">
    <div class="h-screen py-[124px] mx-auto max-w-[1200px] grid grid-cols-12 gap-6 items-center">
      <div class="col-span-5">
        <h2 class="text-[3rem] leading-12 mb-8 text-slate-700">Illustrations</h2>
        <p class="text-slate-500">
          This was a really fun project from one of my jobs. I got to bring characters to life from
          just brief descriptions, working closely with a remote team throughout the process.
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

  <div>
    <div class="mx-auto max-w-[1200px] flex justify-between">
      <p>MY FEW PROJECTS</p>
      <div class="flex">
        <div>
          <p>1</p>
        </div>
        <p>/ 5</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
